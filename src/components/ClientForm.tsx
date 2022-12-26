import * as React from 'react'
import { useForm, Resolver, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'

type ClientFeedbackForm = {
	name: string
	phone: number
	companyName: string
	direction: string
	comment: string
	personaldata: boolean
}

const resolver: Resolver<ClientFeedbackForm> = async (values) => {
	return {
		values: values.name ? values : {},
		errors: !values.name
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

export const ClientForm = () => {


	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ClientFeedbackForm>({ resolver })
	const getSubmit: SubmitHandler<ClientFeedbackForm> = (
		data: ClientFeedbackForm
	) => {
		emailjs.send(
			'service_78hl6cq',
			'template_6un0dkd',
			{
				name: data.name,
				phone: data.phone,
				direction: data.direction,
				comment: data.comment,
			},
			'ysMsE0O2kGv9mWz0r'
		)
	}

	return (
		<div className="sc-feedback__form-control">
			<div className="form-control__wrapper-title">
				<h2 className="h2 form-control__title">
					Подберем оборудование для решения вашей задачи!
				</h2>
				<p className="p form-control__desc desc">
					Заполните поля формы и мы перезвоним в течение 24 часов!
				</p>
			</div>
			<form
				className="form-control__form"
				onSubmit={handleSubmit(getSubmit)}
			>
				<div className="form-control__wrapper-input wrapper-input">
					<label className="p form-control__desc desc"> Имя</label>
					<input
						required
						className="wrapper-input__input-control"
						type="text"
						{...register('name', { required: true, maxLength: 10 })}
					/>
					{errors?.name && <p>{errors.name.message}</p>}
					<div className="wrapper-input__error-message">
						Текст ошибки
					</div>
				</div>
				<div className="form-control__wrapper-input wrapper-input">
					<label className="p form-control__desc desc">
						{' '}
						Contact number
					</label>
					<input
						required
						className="wrapper-input__input-control"
						type="phone"
						{...register('phone', {
							required: true,
							maxLength: 11,
						})}
					/>
					{errors?.phone && <p>{errors.phone.message}</p>}
					<div className="wrapper-input__error-message">
						Текст ошибки
					</div>
				</div>
				<div className="form-control__wrapper-input wrapper-input">
					<label className="p form-control__desc desc">
						Компания
					</label>
					<input
						required
						className="wrapper-input__input-control"
						type="text"
						{...register('companyName', {
							required: true,
							maxLength: 20,
						})}
					/>
					{errors?.companyName && <p>{errors.companyName.message}</p>}
					<div className="wrapper-input__error-message">
						Текст ошибки
					</div>
				</div>

				<div className="form-control__wrapper-input wrapper-input">
					<label className="p form-control__desc desc">
						{' '}
						Направление
					</label>
					<select
						{...register('direction', { required: true })}
						className="wrapper-input__input-control black"
						defaultValue="cosultation"
						required
					>
						<option value="consultation">Консультация</option>
						<option value="construction-machine">
							Строительная техника
						</option>
						<option value="it">ИТ</option>
						<option value="energy">ЭНЕРГЕТИКА</option>
						<option value="e-commerce">E-COMMERCE</option>
					</select>

					{errors?.direction && <p>{errors.direction.message}</p>}
				</div>
				<div className="form-control__wrapper-input wrapper-input">
					<label className="p form-control__desc desc">
						Комментарии
					</label>
					<input
						required
						className="wrapper-input__input-control textarea"
						type="textarea"
						{...register('comment', { maxLength: 11 })}
					/>
				</div>
				<div className="form-control__wrapper-checkbox wrapper-checkbox">
					<label className="wrapper-checkbox__label">
						<input required type="checkbox" />

						<a
							href="/terms-of-use-and-privacy-policy"
							className="a wrapper-checkbox__link"
						>
							{' '}
							Нажимая на кнопку, вы даете согласие на обработку
							ваших персональных данных
						</a>
					</label>
				</div>

				<div className="btn__box--modal">
					<button type="submit" className="btn">
						<div className="btn__content">Отправить</div>
					</button>
				</div>
			</form>
		</div>
	)
}
