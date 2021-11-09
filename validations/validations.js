import {myAccountPage} from '../pages/identifiers';


export const authPageChecks = {
    headerMessage: "AUTHENTICATION"
};

export const validateAccountCreated = async (firstName, lastName)=>{
    const accountName = `${firstName} ${lastName}`;
    
    const accountNameId = await $(myAccountPage.accountName);
    const test = accountNameId.getText();
    console.log(`TEST validation${JSON.stringify(accountNameId)}`);
    try{
        await expect($(accountNameId)).toHaveTextContaining(accountName);
        return true;
    }catch(err){
        return err;
    }
}

export const addProdSuccMsg = {
    msg: "Product successfully added"
}