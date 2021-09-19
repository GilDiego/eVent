import {useState} from "react";

import styles from './FormPromoter.module.css'


function FormPromoter(){
    
    const [errors, setErrors]=useState({form:'Completa el formulario'})
    const [condition, setCondition] = useState({
        divCountry:'',
        idNumber:'',
    })
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
    const namesInputs = (e)=>{
        setForm({...form, country:e.target.value});
        if(e.target.value==='Argentina') {
            setCondition({...condition, divCountry:'Provincia', idNumber:'CUIT'});
        }
        else if (e.target.value==='Colombia'){
            setCondition({...condition, divCountry:'Departamento', idNumber:'NIT'});
        }
        else {
            setCondition({...condition, divCountry:'Estado', idNumber:'RFC'});
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
           <div className={styles.promotorDates}>
                <div className={styles.nameP}>
                    <span >Nombre : </span> <input type="text" placeholder='Nombre Promotor'/>
                    <span >Apellido : </span> <input type="text" placeholder='Apellido Promotor'/>
                </div>
                <div className={styles.contact}>
                    <span >*Telefono: </span> <input type="text" placeholder='Celular/fijo'/>
                    <span >Telefono: </span> <input type="text" placeholder='Celular/fijo'/>
                    
                </div>
                <div className={styles.password}>
                    <span >Email: </span> <input type="email" placeholder='Correo Electronico'/>
                    <span >Contraseña: </span> <input type="password" placeholder='Password'/>
                </div>
           </div>

           <div className={styles.contPais}>
               <span>Ubicación</span>
                <select name="pais" value={form.country} onChange={namesInputs} className={styles.pais}>
                    <option value="Argentina">Argentina</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Mexico">Mexico</option>
                </select>
           </div>
           {form.country&&
                <div className={styles.form2}>
                    <div className={styles.ubication}>
                        <span >{condition.divCountry}: </span><input type="text" placeholder={condition.divCountry}/>
                        <span >Ciudad/Municipio: </span><input type="text" placeholder='Ciudad/Municipio'/>
                    </div>
                    <div className={styles.datesCompany}>
                        <span >Direccion: </span> <input type="text" placeholder='Tipo de Emprendimiento'/>
                        <span >Nombre o Razon social: </span> <input type="text" placeholder='Nombre'/>
                        <span >{condition.idNumber}</span> <input type="text"/>
                        <span >Tipo de Emprendimiento: </span> <input type="text" placeholder='Tipo de Emprendimiento'/>
                    </div>
                </div>
            }
         <button className='btn' type="submit"> Submit </button>
       </form>

       </>
       )
}

export default FormPromoter;

