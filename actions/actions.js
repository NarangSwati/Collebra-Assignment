import * as id from '../pages/identifiers';
import * as validate from '../validations/validations'


export const navigateHomePage = async()=>{
    await $(ID.myAccountPage.homePageNav).click();
}

export const addAndValidateProdToCart = async(prodName)=>{
    const prodId = await(`id.productPage.product[@title=${prodName}]`) 

    await $(id.myAccountPage.homePageNav).click();
    await prodId.waitForClickable({ reverse: true });
    await $(id.productPage.cart).click();
    await expect($(id.productPage.cartConfirmation.message)).toHaveTextContaining(validate.addProdSuccMsg);
}             