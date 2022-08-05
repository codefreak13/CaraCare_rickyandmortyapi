import {element, waitFor} from 'detox';

describe('List Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
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
  });

  it('should be able to search for a character and render the character item', async () => {
    await element(by.id('inputText')).typeText('Sanchez');
    await waitFor(element(by.text('Rick Sanchez')))
      .toBeVisible()
      .withTimeout(2000);
  });

  it('should be able to clear search input', async () => {
    await element(by.id('inputText')).clearText();
  });

  it('should have add to favorite icon', async () => {
    await waitFor(element(by.id('fav'))).toBeVisible();
  });
});
