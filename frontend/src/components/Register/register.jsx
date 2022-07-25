import React from 'react'
import { useState } from 'react';
import { Link , useNavigate } from "react-router-dom";
import axios from 'axios';
import styles from './styles.module.css';

const Register = () => {

    const [data, setData] = useState({
      restaurantName: "",
      restaurantAddress: "",
      ownerName: "",
      ownerAddress: "",
      ownerEmail: "",
      password: "",
      ownerPhone: "",
    });

    const [error , setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
		try {
			const url = "http://localhost:3001/register";
			const { data: res } = await axios.post(url, data);
			navigate('/login');
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
    }
    const handleChange = ({currentTarget : input}) => {
        setData({...data , [input.name] : input.value})
    }

	const formReset = () => {
		setData({
			restaurantName: "",
			restaurantAddress: "",
			ownerName: "",
			ownerAddress: "",
			ownerEmail: "",
			password: "",
			ownerPhone: "",
		})
	}

	

  return (

	<div className={styles.mainDiv}>
	
    <div className={styles.signup_form_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Add Restaurant</h1>
					<Link to="/">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1 className={styles.right}>Create Account</h1>
						<input
							type="text"
							placeholder="Restaurant Name"
							name="restaurantName"
							onChange={handleChange}
							value={data.restaurantName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Restaurant Address"
							name="restaurantAddress"
							onChange={handleChange}
							value={data.restaurantAddress}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Owner Name"
							name="ownerName"
							onChange={handleChange}
							value={data.ownerName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Owner Address"
							name="ownerAddress"
							onChange={handleChange}
							value={data.ownerAddress}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Owner Email"
							name="ownerEmail"
							onChange={handleChange}
							value={data.ownerEmail}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						<input
							type="number"
							placeholder="phone"
							name="ownerPhone"
							onChange={handleChange}
							value={data.ownerPhone}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<div>
						<button type="submit"  className={styles.green_btn}>
							Register
						</button>
     
						<button type="reset"  className={styles.green_btn} onClick = {formReset}>
							Reset
						</button>
						</div>
						
						
					</form>
				</div>
			</div>
		</div>
		</div>
  )
}

export default Register