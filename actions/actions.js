import * as id from '../pages/identifiers';
import * as validate from '../validations/validations'


export const navigateHomePage = async()=>{
    await $(id.myAccountPage.homePageNav).click();
}

export const addAndValidateProdToCart = async(prodName)=>{
    await $(id.myAccountPage.homePageNav).click();
    const prodId = id.productPage.product + "[@title=" + prodName + "]";
    await $(prodId).click();
    await $(id.productPage.cart).click();
    await expect($(id.productPage.cartConfirmation.message)).toHaveTextContaining(validate.addProdSuccMsg);
}             
