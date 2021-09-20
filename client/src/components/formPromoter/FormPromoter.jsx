import {useState} from "react";
import axios from 'axios'
import styles from './FormPromoter.module.css'

const validate =(form)=>{
    let errors = {}
    if (!/^\S+@\S+\.[a-z]+$/.test(form.email)) {
        errors.email = true
    }else {
        errors.email = false
    }

    if(form.country === 'Argentina'){
        if(!(/^([0-9]{2}-[0-9]{8}-[0-9])$|^([0-9]{11})$/.test(form.tax_id)))
        {
            errors.tax_id = true
        }else{
            errors.tax_id = false
        }
    }else if(form.country === 'Colombia'){

    }else if(form.country === 'Mexico'){

    }
    console.log('gfdgdfgdf',form.tax_id)
    // if(!(form.country === 'Argentina' &&
    //     /[0-9]{2}-[0-9]{8}-[0-9]{1}|[0-9]{11}/g.test(form.tax_id))
    // ){
    //     errors.tax_id = true
    // }
    // if(!(form.country === 'Colombia' &&
    // /[0-9]{9}-[0-9]{1}|[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{1}/g.test(form.tax_id))
    // ){
    //     errors.tax_id = true
    // }
    
    return errors
}
function FormPromoter(){
    
    const [errors, setErrors]=useState({tax_id:true});
    const [condition, setCondition] = useState({//este estado valida 
        divCountry:'',// como esta dividido el pais ?
        idNumber:'',// qu tipo de identificacion maneja el pais
    });
    const [form, setForm]=useState({
        promoter_name:'',//leo:nombre y apellido del promotor//
        promoter_lastName:'',
        bio:'',//
        phone:'',//leo:numero de telefono del promotor//
        email:'',//leo:email del promotor//
        password:'',//leo: contraseña// 
        address:'',//dereccion del negocio//
        legal_name:'',//nombre legal//
        tax_id:'',//numero tributario//
        business_type:'',//typo de negocio//
        business_name:'',//
        country:'',//pais
        state:'',//estado,provincia o departamento
        city:'',//ciudad o municipio
    });

    const businessTypes = [
        'Cine',
        'Bar',
        'Parque de diversiones',
        'Teatro',
        'Espacio público',
        'Salón de Conferencias',
        'Estadio',
        'Otros'
    ];



    const namesInputs = (e)=>{//asiganar caracteristicas por pais
        setForm({...form, country:e.target.value});
        if(e.target.value==='Argentina') {
            setCondition({ ...condition, divCountry:'Provincia', idNumber:'CUIT',});
        }
        else if (e.target.value==='Colombia'){
            setCondition({...condition, divCountry:'Departamento', idNumber:'NIT'});
        }
        else {
            setCondition({...condition, divCountry:'Estado', idNumber:'RFC'});
        }
    }

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        
        setErrors(validate({
            ...form,
            [e.target.name]: e.target.value
          }))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        //validate(form);
        try{
            const res = await axios.post('http://localhost:3001/api/promoter',{form})
            alert(res.data.msg) // ERROR DE VIOLACIÓN UNIQUE
        }catch(error){
            console.log('catchhh',error)
        }
       
        //alert(`${form.promoter_name} Promotor creado con satisfacion, espere 48hrs para su autoriazación Bienvenido a eVent `)
        e.target.reset();
    }
    
    return(

            <form onSubmit={handleSubmit}>
                <div className={!form.country?styles.cont:styles.contRend}>
                        <span className={styles.formTitle}>
                            {!form.country ? "Selecciona un país" : "Completa el formulario"}
                        </span>
                    <div className={styles.countrySelect}>
                        <select 
                            name="country"
                            value={form.country}
                            onChange={namesInputs}
                            className={styles.pais}
                        >
                            <option value="" disabled>País</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Mexico">México</option>
                        </select>
                        {form.country && 
                            <span className={styles.tick}> ✓ </span>
                        }
                    </div>
                    {form.country &&
                        <div className={styles.contForm2}>
                             {/*Ubicacion*/}
                            <div className={styles.ubication}>
                                <div className={styles.row}>
                                    <span>{condition.divCountry}: </span>
                                    <input
                                        type="text"
                                        name='state'
                                        placeholder={condition.divCountry}
                                        onChange={handleChange}
                                        className={!form.state && styles.errorState}
                                    />
                                    {form.state && 
                                        <span className={styles.tick}> ✓ </span>
                                    }
                                </div>
                                <div className={styles.row}>
                                    <span>Ciudad/Municipio: </span> 
                                    <input
                                        type="text"
                                        name='city'
                                        placeholder='Ciudad/Municipio'
                                        onChange={handleChange}
                                        className={!form.city && styles.errorState}
                                    />
                                    {form.city && 
                                        <span className={styles.tick}> ✓ </span>
                                    }
                                </div>
                            </div>
                             {/*Informacion empresarial*/}
                            <div className={styles.datesCompany}>
                                <div className={styles.row}>
                                    <span >Tipo de Negocio: </span>
                                    {/* <input type="text" name='business_type' placeholder='Tipo de Emprendimiento' onChange={handleChange} className={!form.business_type && styles.errorState}/>nisiness_type */}
                                    <select
                                        name="business_type"
                                        value={form.business_type}
                                        onChange={handleChange}
                                        className={form.business_type}
                                    >
                                        <option value="" disabled>Selecciona:</option>
                                        {businessTypes.map((el) => <option value={el}>{el}</option>)}
                                    </select>
                                    {form.business_type && 
                                        <span className={styles.tick}> ✓ </span>
                                    }
                                </div>
                                <div className={styles.row}>
                                    <span>Nombre Negocio: </span>
                                    <input
                                        type="text"
                                        name='business_name'
                                        value={form.business_name}
                                        placeholder='Nombre'
                                        onChange={handleChange}
                                        className={!form.business_name && styles.errorState}
                                    />
                                    {form.business_name && 
                                        <span className={styles.tick}> ✓ </span>
                                    }{/*legal_name*/}
                                </div>
                                <div className={styles.row}>
                                    <span>Razón social: </span>
                                    <input
                                        type="text"
                                        name='legal_name'
                                        placeholder='Nombre'
                                        onChange={handleChange}
                                    />
                                    {form.legal_name && 
                                        <span className={styles.tick}> ✓ </span>
                                    }
                                </div>
                                <div className={styles.row}>
                                    <span >{condition.idNumber}: </span>
                                    <input
                                        name='tax_id'
                                        type="text"
                                        onChange={handleChange}
                                    />
                                    {!errors.tax_id &&
                                        <span className={styles.tick}> ✓ </span>
                                    }
                                </div>
                                <div className={styles.row}>
                                    <span>Dirección: </span>
                                    <input
                                        type="text"
                                        name='address'
                                        placeholder='Dirección'
                                        onChange={handleChange}
                                    />
                                    {form.address && 
                                        <span className={styles.tick}> ✓ </span>
                                    }
                                </div>
                            </div>
                              {/*Contacto*/}
                            <div className={styles.contact}>
                                <div className={styles.row}>
                                    <span>Nombre: </span>
                                    <input
                                        type="text"
                                        name='promoter_name'
                                        placeholder='Nombre Promotor'
                                        onChange={handleChange}
                                    />
                                    {form.promoter_name && 
                                        <span className={styles.tick}> ✓ </span>
                                    }
                                </div>
                                <div className={styles.row}>
                                    <span>Apellido: </span>
                                    <input
                                        type="text"
                                        name='promoter_lastName'
                                        placeholder='Apellido Promotor'
                                        onChange={handleChange}
                                    />
                                    {form.promoter_lastName && 
                                        <span className={styles.tick}> ✓ </span>
                                    }
                                </div>
                                <div className={styles.row}>
                                    <span>Teléfono: </span>
                                    <input
                                        type="text"
                                        name='phone'
                                        placeholder='Celular/fijo'
                                        onChange={handleChange}
                                    />
                                    {form.phone && 
                                        <span className={styles.tick}> ✓ </span>
                                    }
                                </div>
                            </div>
                              {/*datos login*/}
                            <div className={styles.password}>
                                <div className={styles.row}>
                                    <span >Email: </span>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Correo Electrónico'
                                        onChange={handleChange}
                                    />
                                    {!errors.email &&
                                        <span className={styles.tick}> ✓ </span>
                                    }
                                </div>
                                <div className={styles.row}>
                                    <span >Contraseña: </span>
                                    <input
                                        type="password"
                                        name='password'
                                        placeholder='Password'
                                        onChange={handleChange}
                                    />
                                    {form.password && 
                                        <span className={styles.tick}> ✓ </span>
                                    }
                                </div>
                            </div>
                            <button className={styles.btn} type="submit">
                            ¡Registrarme!
                            </button>
                        </div>
                    /*(Cierra el condicional form.country*/ }
                </div>
            </form>
      
       )
}

export default FormPromoter;

