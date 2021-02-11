package steps;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.LoginPage;
import util.BrowserFactory;

public class StepDefinition {
	WebDriver driver;
	LoginPage loginPage;

	@Before
	public void beforeRun() {
		driver = BrowserFactory.startBrowser();
		loginPage = PageFactory.initElements(driver, LoginPage.class);

	}

	@Given("^User is on the Techfios Login Page$")
	public void User_is_on_the_Techfios_Login_Page() {
//		driver = BrowserFactory.startBrowser();
		driver.get("https://techfios.com/billing/?ng=admin/");

	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void User_enters_username_as(String userName) throws InterruptedException {
		System.out.println();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterUserName(userName);
		Thread.sleep(2000);
	}

	@Given("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) throws InterruptedException {
		loginPage.enterPassword(password);
		Thread.sleep(2000);

	}

	@When("^User clicks on signin button$")
	public void user_clicks_on_signin_button() throws InterruptedException {
		loginPage.clickOnSignInButton();
		Thread.sleep(2000);

	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() throws IOException {
		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
		loginPage.takeScreenshotAtEndOfTest(driver);
	}

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) throws Throwable {
		loginPage.enterCredentials(username, password);

	}

	@Then("^User should click on Bank and Cash$")
	public void user_should_click_on_Bank_and_Cash() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"side-menu\"]/li[10]/a/span[1]")).click();
		Thread.sleep(2000);
	}

	@Then("^User should click on new account$")
	public void user_should_click_on_new_account() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")).click();
		Thread.sleep(2000);
	}

	@Then("^User should be able to fill the form entering \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_should_be_able_to_fill_the_form_entering_and_and(String AccountTitle, String Description,
			String InitialBalance) throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@id='account']")).sendKeys("My Checking");
		driver.findElement(By.xpath("//input[@id='description']")).sendKeys("Checking");
		driver.findElement(By.xpath("//input[@id='balance']")).sendKeys("$10000");
	}

	@Then("^User should be able to validate$")
	public void user_should_be_able_to_validate() throws Throwable {

	}

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}
