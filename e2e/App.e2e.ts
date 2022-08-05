import {element, waitFor} from 'detox';
import {
  INPUT_TEST_ID,
  CHARACTERS_LIST_TEST_ID,
  FAVORITE_LIST_BUTTON,
  FAV_ICON_TEST_ID,
} from 'src/types';

describe('List Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have header title', async () => {
    await waitFor(element(by.text('CHARACTERS')))
      .toBeVisible()
      .withTimeout(2000);
  });

  it('should scroll through Character list', async () => {
    await element(by.id(CHARACTERS_LIST_TEST_ID)).swipe('up', 'fast', 0.9);
    await device.reloadReactNative();
  });

  it('should be able to type a non existent character and render an empty list', async () => {
    await element(by.id(INPUT_TEST_ID)).typeText('zw');
    await waitFor(element(by.id('emptyText')))
      .toHaveText('No Item')
      .withTimeout(2000);
    await element(by.id(INPUT_TEST_ID)).clearText();
  });

  it('should be able to search for a character and render the character item', async () => {
    await element(by.id(INPUT_TEST_ID)).typeText('Sanchez');
    await waitFor(element(by.text('Rick Sanchez')))
      .toBeVisible()
      .withTimeout(2000);
    await element(by.id(INPUT_TEST_ID)).clearText();
  });

  it('should have add to favorite icon', async () => {
    await waitFor(element(by.id(FAV_ICON_TEST_ID))).toBeVisible();
  });

  it('should add second character in list to favorite list', async () => {
    await element(by.id(FAV_ICON_TEST_ID)).atIndex(1).tap();
  });

  it('should navigate to favorite list', async () => {
    await element(by.id(FAVORITE_LIST_BUTTON)).tap();
  });

  it('should check that favorite character exists in favorite list', async () => {
    await waitFor(element(by.text('Morty Smith')))
      .toBeVisible()
      .withTimeout(2000);
    await device.reloadReactNative();
  });

  it('should navigate to Detail screen', async () => {
    await element(by.id(CHARACTERS_LIST_TEST_ID)).atIndex(0).tap();
  });

  it('should find character details', async () => {
    await waitFor(element(by.text('Morty Smith')))
      .toBeVisible()
      .withTimeout(2000);
    await device.reloadReactNative();
  });
});
