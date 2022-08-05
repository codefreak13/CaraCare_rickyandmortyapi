import React from 'react';
import {Header} from 'src/components/ui';
import {FavoriteList} from 'src/components/list-views';
import {useFavorite} from 'src/hooks';

const FavoriteScreen = () => {
  const {favoriteList, goBack, onPress} = useFavorite();

  return (
    <>
      <Header
        leftButton={{
          onclick: () => goBack(),
        }}
        customMiddleIcon
        title="FAVORITE CHARACTERS"
      />
      <FavoriteList data={favoriteList} onPress={onPress} />
    </>
  );
};

export default FavoriteScreen;
