export default function validate(form) {
    let pass = {};
    if (/^\S+@\S+\.[a-z]+$/.test(form.email)) {
        pass.email = true
    }else {
        pass.email = false
    }

    if(form.country === 'Argentina') {
        if(/^([0-9]{2}-[0-9]{8}-[0-9])$|^([0-9]{11})$/.test(form.tax_id))
        {
            pass.tax_id = true
        }else{
            pass.tax_id = false
        }
    }else if(form.country === 'Colombia') {
        if(/^([0-9]{9}-[0-9]{1})$|^([0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{1})$/.test(form.tax_id))
        {
            pass.tax_id = true
        }else{
            pass.tax_id = false
        }
    }else if(form.country === 'Mexico') {
        if(/^[A-ZÑ&]{3,4}\d{6}(?:[A-Z\d]{3})?$/.test(form.tax_id))
        {
            pass.tax_id = true
        } else {
            pass.tax_id = false
        }
    }

    form.state.length >= 3 ? pass.state = true : pass.state = false;
    form.city.length >= 3 ? pass.city = true :  pass.city = false;
    form.business_type ? pass.business_type = true : pass.business_type = false;
    form.business_name.length >= 3 ? pass.business_name = true : pass.business_name = false;
    form.legal_name.length >= 3 ? pass.legal_name = true : pass.legal_name = false;
    form.promoter_name.length >= 2 ? pass.promoter_name = true : pass.promoter_name = false;
    form.promoter_lastName.length >= 2 ?
        pass.promoter_lastName = true
        : pass.promoter_lastName = false;
    if(
        /[A-Za-zÑñ.-]/.test(form.address) &&
        /\d/.test(form.address) &&
        /[' ']/.test(form.address)
        )  {
            pass.address = true
        } else {
            pass.address = false
    }

    if (/['+']*[0-9]{7,}/.test(form.phone)) {
        pass.phone = true;
    } else {
        pass.phone = false;
    }

    if(
        /[A-Za-zÑñ.-]/.test(form.password) &&
        /\d/.test(form.password) &&
        form.password.length >= 6
        )  {
            pass.password = true;
        } else {
            pass.password = false;
    }

    return pass;
};