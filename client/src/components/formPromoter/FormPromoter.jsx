import { useEffect, useState } from "react";
import axios from 'axios';
import styles from './FormPromoter.module.css';
import validate from './validate.js';
import {connect} from 'react-redux'
import {changeModal} from '../../actions/actions'

function FormPromoter({changeModal}){ 

    const [error, setError] = useState({});
    const [condition, setCondition] = useState({//este estado valida 
        divCountry:'',// como esta dividido el pais ?
        idNumber:'',// qu tipo de identificacion maneja el pais
    });
    const [form, setForm] = useState({
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

    useEffect(()=>{
        setError(validate(form))
    },[])

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
        handleChange(e)
    }

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log('voyy')
        setError(validate({
            ...form,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let obj = validate(form)
       
        if(Object.keys(obj).length !== 0) {
            alert('Completa correctamente los campos');
        } else {
            try{
                const res = await axios.post('http://localhost:3001/api/promoter',{form})
                //alert(res.data.msg); // Respuesta del back
                changeModal('correct', `Promotor creado con éxito. \n Espere 48hrs para su autorización. Bienvenido a eVent, ${form.promoter_name}!`)
                //alert(`Promotor creado con éxito. \n Espere 48hrs para su autorización. Bienvenido a eVent, ${form.promoter_name}!`);
                setError({});
                //window.location.reload()
                //e.target.reset()
  
            }catch(error){
                console.log('catchhh',error);
                alert("No hubo caso. Chequea los datos");
            }
        }
        
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className={!form.country ? styles.cont : styles.contRend}>
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
                        {!error.country &&
                            <span className={styles.tick}> ✓ </span>
                        }
                    </div>
                    {form.country &&
                        <div className={styles.contForm2}>
                             {/*Ubicacion*/}
                            <div className={styles.ubication}>
                                <div className={styles.row}>
                                    <span>{condition.divCountry}: </span>
                                    <div className={styles.inputCheck}>
                                        <input
                                            type="text"
                                            name='state'

                                            onChange={handleChange}
                                            className={!form.state && styles.errorState}
                                        />
                                        <span className={styles.tick}>{!error.state && '✓' }</span> 
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <span>Ciudad/Municipio: </span>
                                    <div>
                                        <input
                                            type="text"
                                            name='city'
                                            onChange={handleChange}
                                            className={!form.city && styles.errorState}
                                        />
                                        <span className={styles.tick}>{ !error.city && '✓'}  </span> 
                                    </div>
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
                                    {!error.business_type &&
                                        <span className={styles.tick}> ✓ </span>
                                    }
                                </div>
                                <div className={styles.row}>
                                    <span>Nombre del negocio: </span>
                                    <input
                                        type="text"
                                        name='business_name'
                                        value={form.business_name}
                                        onChange={handleChange}
                                        className={!form.business_name && styles.errorState}
                                    />
                                    {!error.business_name && <span className={styles.tick}> ✓ </span>}
                                    {/*legal_name*/}
                                </div>
                                <div className={styles.row}>
                                    <span>Razón social: </span>
                                    <input
                                        type="text"
                                        name='legal_name'
                                        onChange={handleChange}
                                    />
                                    {!error.legal_name && <span className={styles.tick}> ✓ </span> }
                                </div>
                                <div className={styles.row}>
                                    <span >{condition.idNumber}: </span>
                                    <input
                                        name='tax_id'
                                        type="text"
                                        onChange={handleChange}
                                    />
                                    {!error.tax_id &&
                                        <span className={styles.tick}> ✓ </span>
                                    }
                                </div>
                                <div className={styles.row}>
                                    <span>Dirección: </span>
                                    <input
                                        type="text"
                                        name='address'
                                        onChange={handleChange}
                                    />
                                    {!error.address &&
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
                                        onChange={handleChange}
                                    />
                                    {!error.promoter_name && <span className={styles.tick}> ✓ </span> }
                                </div>
                                <div className={styles.row}>
                                    <span>Apellido: </span>
                                    <input
                                        type="text"
                                        name='promoter_lastName'
                                        onChange={handleChange}
                                    />
                                    {!error.promoter_lastName && <span className={styles.tick}> ✓ </span> }
                                </div>
                                <div className={styles.row}>
                                    <span>Teléfono (sólo números): </span>
                                    <input
                                        type="text"
                                        name='phone'
                                        onChange={handleChange}
                                    />
                                    {!error.phone &&
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
                                        placeholder='usuario@dominio.abc'
                                        onChange={handleChange}
                                    />
                                    {!error.email &&
                                        <span className={styles.tick}> ✓ </span>
                                    }
                                </div>
                                <div className={styles.row}>
                                    <span >Contraseña (6+ caracteres): </span>
                                    <input
                                        type="password"
                                        name='password'
                                        placeholder='¡Si no tilda, no es segura!'
                                        onChange={handleChange}
                                    />
                                    {!error.password &&
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
        </div>
       )
}
function mapStateToProps(state){
    return{
        modal:state.modal
    }
}
export default connect(null,{changeModal})(FormPromoter);

