import {debounce} from 'lodash';
import {useQuery} from '@apollo/client';
import {AppContext} from 'src/store/Context';
import {GET_CHARACTERS} from 'src/apollo/gql';
import {useNavigation} from '@react-navigation/native';
import {Character, CharacterData, CharacterVars} from 'src/types';
import {APP_ROUTE, ListScreenNavigationProp} from 'src/navigation/types';
import {useState, useContext, useCallback, useMemo, useEffect} from 'react';

const useList = () => {
  //navigation instance for list screen
  const navigation = useNavigation<ListScreenNavigationProp>();

  //global state from context API
  const {viewType, toggleViewType, addFavoriteItem} = useContext(AppContext);

  //Apollo Query initialization for fetching data
  const {loading, data, fetchMore, networkStatus, error} = useQuery<
    CharacterData,
    CharacterVars
  >(GET_CHARACTERS, {notifyOnNetworkStatusChange: true});

  //gets data path from the Apollo data
  const getDataFromApi = data?.characters?.results;
  //container for search param
  const [searchParam, setSearchParam] = useState<string>('');
  //container for data rendered on the screen
  const [renderedData, setRenderedData] = useState<Character[]>([]);

  //handles pagination and endless scrolling
  const loadMore = () => {
    fetchMore({
      variables: {
        page: data?.characters?.info?.next,
      },
    });
  };

  //function that specifies the state of the pagination load more
  const loadMoreState = useMemo(() => {
    if (networkStatus === 3) return true;
    else {
      return false;
    }
  }, [networkStatus]);

  //picker values
  const [form, setForm] = useState({
    status: '',
  });

  const {status} = form;

  //function that takes in the filter options from the filter bar and filters
  const filterDataWithParams = () => {
    const selectedData = getDataFromApi?.filter((item: Character) =>
      status ? status === item.status : item.name,
    );
    return selectedData;
  };

  //memoized function that gets data from a single source and searches for pattern match
  const searchMatchingPatterns = useCallback(
    (searchText: string) => {
      const matcher = new RegExp(searchText, 'ig');
      const selectedData = filterDataWithParams()?.filter((item: Character) => {
        const {name} = item;
        return matcher.test(name);
      });
      setRenderedData(selectedData ?? []);
    },
    [status, searchParam, data],
  );

  //delays data entry for a period and memoizes the search function
  const debouncedSave = useCallback(
    debounce((nextValue: string) => searchMatchingPatterns(nextValue), 1000),
    [searchParam],
  );

  //handles data entry to searchbar and also calls the search function
  const onChangeText = (searchParam: string) => {
    setSearchParam(searchParam);
    debouncedSave(searchParam);
  };

  //handles the data inputted to the multiple picker selects
  const onChangeFormValue = (field: string) => (value: string) => {
    setForm(prevState => ({...prevState, [field]: value}));
  };

  //function that adds an item to favorite screen
  const addToFavorite = (favoriteItem: Character) => {
    addFavoriteItem(favoriteItem);
  };

  //function that navigates to favorite screen
  const goToFavorites = () => {
    navigation.navigate(APP_ROUTE.FAVORITE);
  };

  //clears the search text
  const onClearText = () => {
    setSearchParam('');
  };

  //function for navigating to details screen
  const onPress = (item: Character) => {
    navigation.navigate(APP_ROUTE.DETAIL, item);
  };

  //calls the memoized function to search the data when the filter options are selected
  useEffect(() => {
    searchMatchingPatterns(searchParam);
  }, [searchMatchingPatterns]);

  //renders the data from the API when the app renders for the first time
  useEffect(() => {
    if (renderedData.length === 0) {
      setRenderedData(getDataFromApi ?? []);
    }
  }, [data]);

  return {
    onChangeFormValue,
    toggleViewType,
    addToFavorite,
    loadMoreState,
    goToFavorites,
    renderedData,
    onChangeText,
    searchParam,
    onClearText,
    loadMore,
    viewType,
    onPress,
    loading,
    status,
    error,
  };
};

export default useList;
