import {element, waitFor} from 'detox';

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
    await element(by.id('characterList')).swipe('up', 'fast', 0.9);
    await device.reloadReactNative();
  });

  it('should be able to type a non existent character and render an empty list', async () => {
    await element(by.id('inputText')).typeText('zw');
    await waitFor(element(by.id('emptyText')))
      .toHaveText('No Item')
      .withTimeout(2000);
    await element(by.id('inputText')).clearText();
  });

  it('should be able to search for a character and render the character item', async () => {
    await element(by.id('inputText')).typeText('Sanchez');
    await waitFor(element(by.text('Rick Sanchez')))
      .toBeVisible()
      .withTimeout(2000);
    await element(by.id('inputText')).clearText();
  });

  it('should have add to favorite icon', async () => {
    await waitFor(element(by.id('fav'))).toBeVisible();
  });

  it('should add second character in list to favorite list', async () => {
    await element(by.id('fav')).atIndex(1).tap();
  });

  it('should navigate to favorite list', async () => {
    await element(by.id('favScreen')).tap();
  });

  it('should check that favorite character exists in favorite list', async () => {
    await waitFor(element(by.text('Morty Smith')))
      .toBeVisible()
      .withTimeout(2000);
    await device.reloadReactNative();
  });

  it('should navigate to Detail screen', async () => {
    await element(by.id('characterList')).atIndex(0).tap();
  });

  it('should find character details', async () => {
    await waitFor(element(by.text('Morty Smith')))
      .toBeVisible()
      .withTimeout(2000);
    await device.reloadReactNative();
  });
});
