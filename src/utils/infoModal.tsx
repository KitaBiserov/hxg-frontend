import React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

const style = {
	zIndex: 9999999999999,
	marginLeft: 'auto',
	borderRadius: '15px',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '300px',
	height: 'auto',
	bgcolor: '#ebebeb',
	boxShadow: 24,
	p: 4,
	alignItems: 'center',
}

const InfoModal = () => {
	const [open, setOpen] = React.useState(true)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<Modal
			color="primary"
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography color="main">
					Каталог не содержит полной информации, пожалуйста, свяжитесь
					с нашим специалистом для получения дополнительной информации
				</Typography>
				<div style={{ marginTop: '20px', marginLeft: '100px' }}>
					<button className="btn" onClick={handleClose}>
						<div className="btn__content">OK</div>
					</button>
				</div>
			</Box>
		</Modal>
	)
}

export default InfoModal
