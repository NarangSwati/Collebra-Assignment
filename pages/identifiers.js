export const landingPage = {
    signIn: "=Sign in"
};

export const authPage = {
    authHeader: "h1=Authentication",
    eMail: "//*[@id='email']",
    password: "//*[@id='passwd']",
    signInButton:"//*[@id='SubmitLogin']"

};

export const createAccountPage = {
    emailCreate: "//*[@id='email_create']",
    submitCreateButton:"//*[@id='SubmitCreate']"
};

export const personalInfoPage = {
    personalInfo:{
        personalInfoHeader: "h3=Your personal information",
        titleMr:"//*[@id='id_gender1']",
        titleMrs:"//*[@id='id_gender2']",
        firstName:"//*[@id='customer_firstname']",
        lastName:"//*[@id='customer_lastname']",
        email:"//*[@id='email']",
        pwd:"//*[@id='passwd']",
        dobDay:"//*[@id='days']",
        dobMonth:"//*[@id='months']",
        dobYear:"//*[@id='years']",
        newsletterSubs:"//*[@id='newsletter']",
        offersSubscription:"//*[@id='optin']"
    },
    addressInfo:{
        firstName:"//*[@id='firstname']",
        lastName:"//*[@id='lastname']",
        company:"//*[@id='company']",
        addressLine1:"//*[@id='address1']",
        addressLine2:"//*[@id='address2']",
        city:"//*[@id='city']",
        state:"//*[@id='id_state']",
        zipCode:"//*[@id='postcode']",
        country:"//*[@id='id_country']",
        addInfo:"//*[@id='other']",
        homePhone:"//*[@id='phone']",
        mobile:"//*[@id='phone_mobile']",
        aliasAddress:"//*[@id='alias']",
        registerButton:"//*[@id='submitAccount']/span"
    }
};

export const myAccountPage = {
    accountName: "//a[@class='account']/span",
    signOutButton:"//a[@class='logout']",
    homePageNav:"//*[@id='center_column']/ul/li/a/span"
};

export const productPage={
    
    product:"//div[@class='tab-content']//ul[@id='homefeatured']//li//div[@class='right-block']//a",
    cart:"//*[@id='add_to_cart']/button/span",

    cartConfirmation:{
        
        message:"//*[@id='layer_cart']/div[1]/div[1]/h2",
        proceedCheckoutButton:"//*[@id='layer_cart']//a[@title='Proceed to checkout']"
    },
    cartNavigation:{
        checkOutSummary:"//p[@class='cart_navigation clearfix']//a[@title='Proceed to checkout']",
        checkOutAddressShipping:"//p[@class='cart_navigation clearfix']//button",
        checkoutTerms:"//input[@id='cgv']"
    
    },
    paymentScreen:{
        description:"//table[@id='cart_summary']/tbody/tr[1]/td[@class='cart_description']/p/a",
        unitPrice:"//table[@id='cart_summary']/tbody/tr[1]/td[@class='cart_unit']/span/span",
        quantity:"//table[@id='cart_summary']/tbody/tr[1]/td[@class='cart_quantity text-center']/span",
        total:"//table[@id='cart_summary']/tbody/tr[1]/td[@class='cart_total']/span"
    }
    
}
