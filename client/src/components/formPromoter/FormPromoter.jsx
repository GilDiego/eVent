import {useState} from "react";
import  './FormPromoter.css'



function FormPromoter(){
    const [errors, setErrors]=useState({form:'Completa el formulario'})
    const [form,setForm]=useState({

        businessName:'',
        name:'',
        rfc:'',
        nameAdm:'',
        email:'',
        pasword:'',
        phone:'',
        type:'',
        country:'',
        state:'',
        city:'',
        direcction:'',
        descriptionPromoter:'',
        authorized:false,   
    })
    const handleOnchange= (e)=>{
        let target = e.target.value 
        
    }
    const validate = form=>{
        if(!form.businessName){
            errors.businessName='Razon Social es requerida '
        }else if (form.businessName.lenght <4){
            errors.businessName='Razon social Invalida'
        }
        if(!form.name){
            errors.name='Nombre es requerido'
        }
        if(!form.rfc){
            errors.rfc='Registro requerido'
        }
        if(!form.nameAdm){
            errors.nameAdm='Nombre del encargado requerido '
        }else if (form.nameAdm.lenght< 5){
             errors.nameAdm='Nombre invalido '
        }
        if(!form.email){
            errors.email='Correo electronico Requerido '

        }else if(form.email){
            
        }


    }
    const handleSumit = (e)=>{
        e.prevent.default();
        e.target.reset();
        validate(form);
        alert(`${form.name} Promotor creado con satisfacion, espero 48hrs para su autoriazación Bienvenido a eVent `)
      
    }
    

    return(
       <>
       <form  onSubmit={handleSumit}>

        <h1>Desde Form Promoter</h1>

       </form>

       </>    )
}

export default FormPromoter;

