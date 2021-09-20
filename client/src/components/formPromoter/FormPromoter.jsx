import {useState} from "react";
import axios from 'axios'
import styles from './FormPromoter.module.css'


function FormPromoter(){
    
    const [errors, setErrors]=useState({form:'Completa el formulario'})
    const [condition, setCondition] = useState({//este estado valida 
        divCountry:'',// como esta dividido el pais ?
        idNumber:'',// qu tipo de identificacion maneja el pais
    });
    const [form,setForm]=useState({
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
        })  
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
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className={!form.country?styles.cont:styles.contRend}>
                    <span className={styles.formTitle}>{!form.country ? "Selecciona un país" : "Completa el formulario"}</span>
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
                                        className={!form.business_type && styles.errorState}
                                    >
                                        <option value="" disabled>País</option>
                                        {businessTypes.map((el) => <option value={el}>{el}</option>)}
                                    </select>
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
                                    />{/*legal_name*/}
                                </div>
                                <div className={styles.row}>
                                    <span>Razón social: </span>
                                    <input
                                        type="text"
                                        name='legal_name'
                                        placeholder='Nombre'
                                        onChange={handleChange}
                                    />{/*legal_name*/}
                                </div>
                                <div className={styles.row}>
                                    <span >{condition.idNumber}: </span>
                                    <input
                                        name='tax_id'
                                        type="text"
                                        onChange={handleChange}
                                    />{/*tax_id*/}
                                </div>
                                <div className={styles.row}>
                                    <span>Dirección: </span>
                                    <input
                                        type="text"
                                        name='address'
                                        placeholder='Dirección'
                                        onChange={handleChange}
                                    />{/*address*/}
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
                                    />{/*promoter_name*/}
                                </div>
                                <div className={styles.row}>
                                    <span>Apellido: </span>
                                    <input
                                        type="text"
                                        name='promoter_lastName'
                                        placeholder='Apellido Promotor'
                                        onChange={handleChange}
                                    />{/*promoter_name*/}
                                </div>
                                <div className={styles.row}>
                                    <span>Teléfono: </span>
                                    <input
                                        type="text"
                                        name='phone'
                                        placeholder='Celular/fijo'
                                        onChange={handleChange}
                                    />{/*phone*/}
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
                                    />{/*email*/}
                                </div>
                                <div className={styles.row}>
                                    <span >Contraseña: </span>
                                    <input
                                        type="password"
                                        name='password'
                                        placeholder='Password'
                                        onChange={handleChange}
                                    />{/*password*/}
                                </div>
                            </div>
                            <button className={styles.btn} type="submit">
                            ¡Registrarme!
                            </button>
                        </div>
                    /*(Cierra el condicional form.country*/ }
                </div>
            </form>
        </div>
       )
}

export default FormPromoter;

