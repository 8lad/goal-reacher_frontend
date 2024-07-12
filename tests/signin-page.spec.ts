import { By, Builder, Key, until, WebDriver } from 'selenium-webdriver';
import * as assert from 'assert';
import 'dotenv/config';

const PAGE_URL = `${process.env.BASE_URL}/signin`;
const SIGNIN_PAGE_TITLE = 'Sign in';
const MAIN_PAGE_TITLE = 'Goal reacher app';
const DESCRIBE_TIMEOUT = 1000;
const AMOUNT_OF_ERROR_MESSAGE_PARAGRAPHS = 3;
const TESTED_BROWSER = 'firefox';

const inputFields = {
  name: 'name',
  email: 'email',
  password: 'password',
  confirmPassword: 'confirmPassword',
};

describe('Test for signin page', async () => {
  let driver: WebDriver;

  before(async () => {
    driver = await new Builder().forBrowser(TESTED_BROWSER).build();
    await driver.manage().setTimeouts({ implicit: DESCRIBE_TIMEOUT });
    await driver.get(PAGE_URL);
  });

  after(async () => {
    driver.quit();
  });

  it('Should have correct page title', async () => {
    const title = await driver.getTitle();
    assert.equal(SIGNIN_PAGE_TITLE, title);
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

    assert.equal(errorMessageText, 'The name shoul have at least 2 symbols');
  });

  it('Should have error message for the name input if have more than 30 letters', async () => {
    const nameInput = await driver.findElement(By.name(inputFields.name));
    await nameInput.sendKeys('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', Key.ENTER);

    const nameErrorMessage = await driver.findElement(By.xpath('//form//label[1]/p'));
    const errorMessageText = await nameErrorMessage.getText();

    assert.equal(errorMessageText, "The name can't be longer than 30 symbols");
  });

  it('Should have error if email is invalid', async () => {
    const emailInput = await driver.findElement(By.name(inputFields.email));
    await emailInput.sendKeys('aaaaaaa', Key.ENTER);

    const emailErrorMessage = await driver.findElement(By.xpath('//form//label[2]/p'));
    const errorMessageText = await emailErrorMessage.getText();

    assert.equal(errorMessageText, 'Invalid email address');
  });

  it('Should have error if password is less than 8 symbols', async () => {
    const passwordInput = await driver.findElement(By.name(inputFields.password));
    await passwordInput.sendKeys('aaaaaaa', Key.ENTER);

    const passwordErrorMessage = await driver.findElement(By.xpath('//form//label[3]/p'));
    const errorMessageText = await passwordErrorMessage.getText();

    assert.equal(
      errorMessageText,
      'Password must be longer than 8 symbols, and contains capital letter, numbers and special symbols',
    );
  });

  it("Should have error if passwords doesn't match", async () => {
    const passwordInput = await driver.findElement(By.name(inputFields.password));
    await passwordInput.sendKeys('aaaaaaaaaa');

    const confirmPassword = await driver.findElement(By.name(inputFields.confirmPassword));
    await confirmPassword.sendKeys('bbbbbbbbbb', Key.ENTER);

    const passwordErrorMessage = await driver.findElement(By.xpath('//form//label[4]/p'));
    const errorMessageText = await passwordErrorMessage.getText();

    assert.equal(errorMessageText, 'Passwords must match');
  });

  it('Should change input type for the password input after click on the visibility button', async () => {
    const passwordInput = await driver.findElement(By.name(inputFields.password));
    const passwordInputTypePassword = await passwordInput.getAttribute('type');

    const passwordVisibilityButton = await driver.findElement(By.xpath('//form//label[3]/button'));
    await passwordVisibilityButton.click();

    const passwordInputTypeText = await passwordInput.getAttribute('type');

    assert.equal(passwordInputTypeText, 'text');
    assert.equal(passwordInputTypePassword, 'password');
  });

  it('Should change input type for the confirm password input after click on the visibility button', async () => {
    const confirmPasswordInput = await driver.findElement(By.name(inputFields.confirmPassword));
    const passwordInputTypePassword = await confirmPasswordInput.getAttribute('type');

    const passwordVisibilityButton = await driver.findElement(By.xpath('//form//label[4]/button'));
    await passwordVisibilityButton.click();

    const passwordInputTypeText = await confirmPasswordInput.getAttribute('type');

    assert.equal(passwordInputTypeText, 'text');
    assert.equal(passwordInputTypePassword, 'password');
  });

  it('Should redirect after the form is completed successfully', async () => {
    const allInputs = await driver.findElements(By.xpath('//form//input'));

    for (const input of allInputs) {
      input.clear();
    }

    const nameInput = await driver.findElement(By.name(inputFields.name));
    await nameInput.sendKeys('Andry');

    const emailInput = await driver.findElement(By.name(inputFields.email));
    await emailInput.sendKeys('test@gmail.com');

    const passwordInput = await driver.findElement(By.name(inputFields.password));
    await passwordInput.sendKeys('12345qwertyQWERT+');

    const confirmPassword = await driver.findElement(By.name(inputFields.confirmPassword));
    await confirmPassword.sendKeys('12345qwertyQWERT+');

    const submitButton = await driver.findElement(By.xpath("//button[@type='submit']"));
    submitButton.click();
    await driver.wait(until.titleIs(MAIN_PAGE_TITLE), 10000);

    const title = await driver.getTitle();
    assert.strictEqual(MAIN_PAGE_TITLE, title);
  });
});
