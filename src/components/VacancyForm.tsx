import React, { useRef, useState, useEffect } from 'react'
import { useForm, Resolver, SubmitHandler } from 'react-hook-form'
import { Checkbox } from '@mui/material'

type ClientFeedbackForm = {
	firstName: string
	secondName: string
	phone: number
	email: string
	portfolioLink: string
	comment: string
	role: string
	personaldata: boolean
}

const resolver: Resolver<ClientFeedbackForm> = async (values) => {
	return {
		values: values.firstName ? values : {},
		errors: !values.firstName
			? {
					name: {
						type: 'required',
						message: 'This is required fields',
					},
					companyName: {
						type: 'required',
						message: 'This is required fields',
					},
					direction: {
						type: 'required',
						message: 'This is required fields',
					},
					phone: {
						type: 'required',
						message: 'This is required fields',
					},
			  }
			: {},
	}
}

export const VacancyForm = () => {
	const [checked, setChecked] = React.useState(true)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked)
	}

	const [token, setToken] = useState(null)
	const captchaRef = useRef(null)
	useEffect(() => {
		if (token) {
			console.log(`hCapthca token: ${token}`)
		}
	}, [token])

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ClientFeedbackForm>({ resolver })
	const getSubmit: SubmitHandler<ClientFeedbackForm> = (
		data: ClientFeedbackForm
	) => {
		return console.log(data)
	}

	return (
		<div className="client-feedback">
			<form
				className="form-control__form"
				onSubmit={handleSubmit(getSubmit)}
			>
				<div className="form-control__wrapper-input wrapper-input">
					<label className="p form-control__desc desc black"> Имя</label>
					<input
						required
						className="wrapper-input__input-control black"
						type="text"
						{...register('firstName', { required: true, maxLength: 10 })}
					/>
					{errors?.firstName && <p>{errors.firstName.message}</p>}
				</div>
				<div className="form-control__wrapper-input wrapper-input black">
					<label className="p form-control__desc desc black">
						{' '}
						Фамилия
					</label>
					<input
						required
						className="wrapper-input__input-control"
						type="text"
						{...register('secondName', { required: true, maxLength: 10 })}
					/>
					{errors?.secondName && <p>{errors.secondName.message}</p>}
				</div>
				<div className="form-control__wrapper-input wrapper-input">
					<label className="p form-control__desc desc black">
						{' '}
						Контактный телефон
					</label>
					<input
						required
						className="wrapper-input__input-control"
						type="phone"
						{...register('phone', { required: true, maxLength: 11 })}
					/>
				</div>
				<div className="form-control__wrapper-input wrapper-input">
					<label className="p form-control__desc desc black"> Email</label>
					<input
						required
						className="wrapper-input__input-control"
						type="email"
						{...register('email', { required: true, maxLength: 11 })}
					/>
				</div>
				<div className="form-control__wrapper-input wrapper-input">
					<label className="p form-control__desc desc black">
						Роль в команде
					</label>
					<input
						required
						className="wrapper-input__input-control"
						type="text"
						{...register('role', { required: true, maxLength: 20 })}
					/>
					{errors?.role && <p>{errors.role.message}</p>}
				</div>

				<div className="form-control__wrapper-input wrapper-input">
					<label className="p form-control__desc desc black">
						Ссылка на портфолио
					</label>
					<input
						required
						className="wrapper-input__input-control textarea"
						type="textarea"
						{...register('portfolioLink', { maxLength: 11 })}
					/>
				</div>
				<div className="form-control__wrapper-input wrapper-input">
					<label className="p form-control__desc desc black">
						Комментарии
					</label>
					<input
						className="wrapper-input__input-control textarea"
						type="textarea"
						{...register('comment', { maxLength: 11 })}
					/>
				</div>
				<div className="form-control__wrapper-checkbox wrapper-checkbox">
					<Checkbox
						required
						checked={checked}
						onChange={handleChange}
						inputProps={{ 'aria-label': 'controlled' }}
					/>

					<label className="wrapper-checkbox__label">
						<span className="span wrapper-checkbox__text__black">
							Нажав на кнопку, вы даете согласие на обработку ваших{' '}
							<a
								href="/terms-of-use-and-privacy-policy"
								className="a wrapper-checkbox__link__black"
							>
								персональных данных
							</a>
						</span>
					</label>
				</div>
				<div className="btn__box--vacansy">
					<button type="submit" className="btn">
						<div className="btn__content">Отправить</div>
					</button>
				</div>
			</form>
		</div>
	)
}
