"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { metadata as mainPageMetaData } from '../src/app/layout';
const selenium_webdriver_1 = require("selenium-webdriver");
const assert = __importStar(require("assert"));
require("dotenv/config");
const PAGE_URL = `${process.env.BASE_URL}/signin`;
// const PAGE_URL = 'http://localhost:3200/signin';
const SIGNIN_PAGE_TITLE = 'Sign in';
// const MAIN_PAGE_TITLE = mainPageMetaData.title as string;
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
describe('Test for signin page', () => __awaiter(void 0, void 0, void 0, function* () {
    let driver;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        driver = yield new selenium_webdriver_1.Builder().forBrowser(TESTED_BROWSER).build();
        yield driver.manage().setTimeouts({ implicit: DESCRIBE_TIMEOUT });
        yield driver.get(PAGE_URL);
    }));
    after(() => __awaiter(void 0, void 0, void 0, function* () {
        driver.quit();
    }));
    it('Should have correct page title', () => __awaiter(void 0, void 0, void 0, function* () {
        const title = yield driver.getTitle();
        assert.equal(SIGNIN_PAGE_TITLE, title);
    }));
    it('Should have name input field', () => __awaiter(void 0, void 0, void 0, function* () {
        const nameInput = yield driver.findElement(selenium_webdriver_1.By.name(inputFields.name));
        const hasNameInput = yield nameInput.isDisplayed();
        assert.strictEqual(hasNameInput, true);
    }));
    it('Should have email input field', () => __awaiter(void 0, void 0, void 0, function* () {
        const emailInput = yield driver.findElement(selenium_webdriver_1.By.name(inputFields.email));
        const hasEmailInput = yield emailInput.isDisplayed();
        assert.strictEqual(hasEmailInput, true);
    }));
    it('Should have password input field', () => __awaiter(void 0, void 0, void 0, function* () {
        const passwordInput = yield driver.findElement(selenium_webdriver_1.By.name(inputFields.password));
        const hasPasswordInput = yield passwordInput.isDisplayed();
        assert.strictEqual(hasPasswordInput, true);
    }));
    it('Should have confirmPassword input field', () => __awaiter(void 0, void 0, void 0, function* () {
        const confirmPasswordInput = yield driver.findElement(selenium_webdriver_1.By.name(inputFields.confirmPassword));
        const hasConfirmPasswordInput = yield confirmPasswordInput.isDisplayed();
        assert.strictEqual(hasConfirmPasswordInput, true);
    }));
    it('Should have submit button input field', () => __awaiter(void 0, void 0, void 0, function* () {
        const submitButton = yield driver.findElement(selenium_webdriver_1.By.xpath("//button[@type='submit']"));
        const hasSubmitButton = yield submitButton.isDisplayed();
        assert.strictEqual(hasSubmitButton, true);
    }));
    it('Should have three error message if click submit with empty form', () => __awaiter(void 0, void 0, void 0, function* () {
        const submitButton = yield driver.findElement(selenium_webdriver_1.By.xpath("//button[@type='submit']"));
        yield submitButton.click();
        const allErrorMessages = yield driver.findElements(selenium_webdriver_1.By.xpath('//form//p'));
        const allErrorMessagesLength = allErrorMessages.length;
        assert.equal(allErrorMessagesLength, AMOUNT_OF_ERROR_MESSAGE_PARAGRAPHS);
    }));
    it('Should have error message for the name input if have less than 2 letters', () => __awaiter(void 0, void 0, void 0, function* () {
        const nameInput = yield driver.findElement(selenium_webdriver_1.By.name(inputFields.name));
        yield nameInput.sendKeys('s', selenium_webdriver_1.Key.ENTER);
        const nameErrorMessage = yield driver.findElement(selenium_webdriver_1.By.xpath('//form//label[1]/p'));
        const errorMessageText = yield nameErrorMessage.getText();
        assert.equal(errorMessageText, 'The name shoul have at least 2 symbols');
    }));
    it('Should have error message for the name input if have more than 30 letters', () => __awaiter(void 0, void 0, void 0, function* () {
        const nameInput = yield driver.findElement(selenium_webdriver_1.By.name(inputFields.name));
        yield nameInput.sendKeys('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', selenium_webdriver_1.Key.ENTER);
        const nameErrorMessage = yield driver.findElement(selenium_webdriver_1.By.xpath('//form//label[1]/p'));
        const errorMessageText = yield nameErrorMessage.getText();
        assert.equal(errorMessageText, "The name can't be longer than 30 symbols");
    }));
    it('Should have error if email is invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        const emailInput = yield driver.findElement(selenium_webdriver_1.By.name(inputFields.email));
        yield emailInput.sendKeys('aaaaaaa', selenium_webdriver_1.Key.ENTER);
        const emailErrorMessage = yield driver.findElement(selenium_webdriver_1.By.xpath('//form//label[2]/p'));
        const errorMessageText = yield emailErrorMessage.getText();
        assert.equal(errorMessageText, 'Invalid email address');
    }));
    it('Should have error if password is less than 8 symbols', () => __awaiter(void 0, void 0, void 0, function* () {
        const passwordInput = yield driver.findElement(selenium_webdriver_1.By.name(inputFields.password));
        yield passwordInput.sendKeys('aaaaaaa', selenium_webdriver_1.Key.ENTER);
        const passwordErrorMessage = yield driver.findElement(selenium_webdriver_1.By.xpath('//form//label[3]/p'));
        const errorMessageText = yield passwordErrorMessage.getText();
        assert.equal(errorMessageText, 'Password must be longer than 8 symbols, and contains capital letter, numbers and special symbols');
    }));
    it("Should have error if passwords doesn't match", () => __awaiter(void 0, void 0, void 0, function* () {
        const passwordInput = yield driver.findElement(selenium_webdriver_1.By.name(inputFields.password));
        yield passwordInput.sendKeys('aaaaaaaaaa');
        const confirmPassword = yield driver.findElement(selenium_webdriver_1.By.name(inputFields.confirmPassword));
        yield confirmPassword.sendKeys('bbbbbbbbbb', selenium_webdriver_1.Key.ENTER);
        const passwordErrorMessage = yield driver.findElement(selenium_webdriver_1.By.xpath('//form//label[4]/p'));
        const errorMessageText = yield passwordErrorMessage.getText();
        assert.equal(errorMessageText, 'Passwords must match');
    }));
    it('Should change input type for the password input after click on the visibility button', () => __awaiter(void 0, void 0, void 0, function* () {
        const passwordInput = yield driver.findElement(selenium_webdriver_1.By.name(inputFields.password));
        const passwordInputTypePassword = yield passwordInput.getAttribute('type');
        const passwordVisibilityButton = yield driver.findElement(selenium_webdriver_1.By.xpath('//form//label[3]/button'));
        yield passwordVisibilityButton.click();
        const passwordInputTypeText = yield passwordInput.getAttribute('type');
        assert.equal(passwordInputTypeText, 'text');
        assert.equal(passwordInputTypePassword, 'password');
    }));
    it('Should change input type for the confirm password input after click on the visibility button', () => __awaiter(void 0, void 0, void 0, function* () {
        const confirmPasswordInput = yield driver.findElement(selenium_webdriver_1.By.name(inputFields.confirmPassword));
        const passwordInputTypePassword = yield confirmPasswordInput.getAttribute('type');
        const passwordVisibilityButton = yield driver.findElement(selenium_webdriver_1.By.xpath('//form//label[4]/button'));
        yield passwordVisibilityButton.click();
        const passwordInputTypeText = yield confirmPasswordInput.getAttribute('type');
        assert.equal(passwordInputTypeText, 'text');
        assert.equal(passwordInputTypePassword, 'password');
    }));
    it('Should redirect after the form is completed successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const allInputs = yield driver.findElements(selenium_webdriver_1.By.xpath('//form//input'));
        for (const input of allInputs) {
            input.clear();
        }
        const nameInput = yield driver.findElement(selenium_webdriver_1.By.name(inputFields.name));
        yield nameInput.sendKeys('Andry');
        const emailInput = yield driver.findElement(selenium_webdriver_1.By.name(inputFields.email));
        yield emailInput.sendKeys('test@gmail.com');
        const passwordInput = yield driver.findElement(selenium_webdriver_1.By.name(inputFields.password));
        yield passwordInput.sendKeys('12345qwertyQWERT+');
        const confirmPassword = yield driver.findElement(selenium_webdriver_1.By.name(inputFields.confirmPassword));
        yield confirmPassword.sendKeys('12345qwertyQWERT+');
        const submitButton = yield driver.findElement(selenium_webdriver_1.By.xpath("//button[@type='submit']"));
        submitButton.click();
        yield driver.wait(selenium_webdriver_1.until.titleIs(MAIN_PAGE_TITLE), 10000);
        const title = yield driver.getTitle();
        assert.strictEqual(MAIN_PAGE_TITLE, title);
    }));
}));
