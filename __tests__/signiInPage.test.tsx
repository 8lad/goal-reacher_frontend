import { By, Builder, Key, until, WebDriver } from 'selenium-webdriver';
import { Routes } from '@/constants/generalConstants';
import * as assert from 'assert';
import { dictionary } from '@/constants/dictionary';

const PAGE_URL = `${process.env.BASE_URL}${Routes.Signin}`;
const SIGNIN_PAGE_DATA = { ...dictionary.EN.PAGES.SIGN_IN };
const MAIN_PAGE_TITLE = dictionary.EN.PAGES.HOME.METADATA.TITLE;
const TESTED_BROWSER = 'firefox';

const DESCRIBE_TIMEOUT = 1000;
const AMOUNT_OF_ERROR_MESSAGE_PARAGRAPHS = 3;
const PAGE_RELOAD_DELAY = 10000;

const inputFields = {
  name: 'name',
  email: 'email',
  password: 'password',
  confirmPassword: 'confirmPassword',
};

const mockUserData = {
  name: 'Andry',
  email: 'test@gmail.com',
  password: '12345qwertyQWERT+',
  confirmPassword: '12345qwertyQWERT+',
};

const passwordInputOptions = {
  attribute: 'type',
  type: {
    password: 'password',
    text: 'text',
  },
};

describe('Test for signin page', () => {
  let driver: WebDriver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser(TESTED_BROWSER).build();
    await driver.manage().setTimeouts({ implicit: DESCRIBE_TIMEOUT });
    await driver.get(PAGE_URL);
  });

  afterAll(async () => {
    driver.quit();
  });

  it('Should have correct page title', async () => {
    const title = await driver.getTitle();
    assert.equal(SIGNIN_PAGE_DATA.METADATA.TITLE, title);
  });

  it('Should have name input field', async () => {
    const nameInput = await driver.findElement(By.name(inputFields.name));
    const hasNameInput = await nameInput.isDisplayed();
    assert.strictEqual(hasNameInput, true);
  });

  it('Should have email input field', async () => {
    const emailInput = await driver.findElement(By.name(inputFields.email));
    const hasEmailInput = await emailInput.isDisplayed();
    assert.strictEqual(hasEmailInput, true);
  });

  it('Should have password input field', async () => {
    const passwordInput = await driver.findElement(By.name(inputFields.password));
    const hasPasswordInput = await passwordInput.isDisplayed();
    assert.strictEqual(hasPasswordInput, true);
  });

  it('Should have confirmPassword input field', async () => {
    const confirmPasswordInput = await driver.findElement(By.name(inputFields.confirmPassword));
    const hasConfirmPasswordInput = await confirmPasswordInput.isDisplayed();
    assert.strictEqual(hasConfirmPasswordInput, true);
  });

  it('Should have submit button input field', async () => {
    const submitButton = await driver.findElement(By.xpath("//button[@type='submit']"));
    const hasSubmitButton = await submitButton.isDisplayed();
    assert.strictEqual(hasSubmitButton, true);
  });

  it('Should have three error message if click submit with empty form', async () => {
    const submitButton = await driver.findElement(By.xpath("//button[@type='submit']"));
    await submitButton.click();
    const allErrorMessages = await driver.findElements(By.xpath('//form//p'));
    const allErrorMessagesLength = allErrorMessages.length;

    assert.equal(allErrorMessagesLength, AMOUNT_OF_ERROR_MESSAGE_PARAGRAPHS);
  });

  it('Should have error message for the name input if have less than 2 letters', async () => {
    const nameInput = await driver.findElement(By.name(inputFields.name));
    await nameInput.sendKeys('s', Key.ENTER);

    const nameErrorMessage = await driver.findElement(By.xpath('//form//label[1]/p'));
    const errorMessageText = await nameErrorMessage.getText();

    assert.equal(errorMessageText, SIGNIN_PAGE_DATA.FORM.ERROR_MESSAGES.NAME.SHORT_NAME);
  });

  it('Should have error message for the name input if have more than 30 letters', async () => {
    const nameInput = await driver.findElement(By.name(inputFields.name));
    await nameInput.sendKeys('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', Key.ENTER);

    const nameErrorMessage = await driver.findElement(By.xpath('//form//label[1]/p'));
    const errorMessageText = await nameErrorMessage.getText();

    assert.equal(errorMessageText, SIGNIN_PAGE_DATA.FORM.ERROR_MESSAGES.NAME.LONG_NAME);
  });

  it('Should have error if email is invalid', async () => {
    const emailInput = await driver.findElement(By.name(inputFields.email));
    await emailInput.sendKeys('aaaaaaa', Key.ENTER);

    const emailErrorMessage = await driver.findElement(By.xpath('//form//label[2]/p'));
    const errorMessageText = await emailErrorMessage.getText();

    assert.equal(errorMessageText, SIGNIN_PAGE_DATA.FORM.ERROR_MESSAGES.EMAIL.INVALID_EMAIL);
  });

  it('Should have error if password is less than 8 symbols', async () => {
    const passwordInput = await driver.findElement(By.name(inputFields.password));
    await passwordInput.sendKeys('aaaaaaa', Key.ENTER);

    const passwordErrorMessage = await driver.findElement(By.xpath('//form//label[3]/p'));
    const errorMessageText = await passwordErrorMessage.getText();

    assert.equal(errorMessageText, SIGNIN_PAGE_DATA.FORM.ERROR_MESSAGES.PASSWORD.INVALID_PASSWORD);
  });

  it("Should have error if passwords doesn't match", async () => {
    const passwordInput = await driver.findElement(By.name(inputFields.password));
    await passwordInput.sendKeys('aaaaaaaaaa');

    const confirmPassword = await driver.findElement(By.name(inputFields.confirmPassword));
    await confirmPassword.sendKeys('bbbbbbbbbb', Key.ENTER);

    const passwordErrorMessage = await driver.findElement(By.xpath('//form//label[4]/p'));
    const errorMessageText = await passwordErrorMessage.getText();

    assert.equal(
      errorMessageText,
      SIGNIN_PAGE_DATA.FORM.ERROR_MESSAGES.CONFIRM_PASSWORD.INVALID_CONFIRM,
    );
  });

  it('Should change input type for the password input after click on the visibility button', async () => {
    const passwordInput = await driver.findElement(By.name(inputFields.password));
    const passwordInputTypePassword = await passwordInput.getAttribute(
      passwordInputOptions.attribute,
    );

    const passwordVisibilityButton = await driver.findElement(By.xpath('//form//label[3]/button'));
    await passwordVisibilityButton.click();

    const passwordInputTypeText = await passwordInput.getAttribute(passwordInputOptions.attribute);

    assert.equal(passwordInputTypeText, passwordInputOptions.type.text);
    assert.equal(passwordInputTypePassword, passwordInputOptions.type.password);
  });

  it('Should change input type for the confirm password input after click on the visibility button', async () => {
    const confirmPasswordInput = await driver.findElement(By.name(inputFields.confirmPassword));
    const passwordInputTypePassword = await confirmPasswordInput.getAttribute(
      passwordInputOptions.attribute,
    );

    const passwordVisibilityButton = await driver.findElement(By.xpath('//form//label[4]/button'));
    await passwordVisibilityButton.click();

    const passwordInputTypeText = await confirmPasswordInput.getAttribute(
      passwordInputOptions.attribute,
    );

    assert.equal(passwordInputTypeText, passwordInputOptions.type.text);
    assert.equal(passwordInputTypePassword, passwordInputOptions.type.password);
  });

  it('Should redirect after the form is completed successfully', async () => {
    const allInputs = await driver.findElements(By.xpath('//form//input'));

    for (const input of allInputs) {
      input.clear();
    }

    const nameInput = await driver.findElement(By.name(inputFields.name));
    await nameInput.sendKeys(mockUserData.name);

    const emailInput = await driver.findElement(By.name(inputFields.email));
    await emailInput.sendKeys(mockUserData.email);

    const passwordInput = await driver.findElement(By.name(inputFields.password));
    await passwordInput.sendKeys(mockUserData.password);

    const confirmPassword = await driver.findElement(By.name(inputFields.confirmPassword));
    await confirmPassword.sendKeys(mockUserData.password);

    const submitButton = await driver.findElement(By.xpath("//button[@type='submit']"));
    submitButton.click();
    await driver.wait(until.titleIs(MAIN_PAGE_TITLE), PAGE_RELOAD_DELAY);

    const title = await driver.getTitle();
    assert.strictEqual(MAIN_PAGE_TITLE, title);
  });
});
