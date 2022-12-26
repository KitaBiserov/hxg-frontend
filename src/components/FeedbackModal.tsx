import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { ClientForm } from './ClientForm'

const style = {
	position: 'absolute',
	zIndex: 99999,
	backgroundColor: 'black',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '100%',
	height: '100%',
	bgcolor: 'rgb(0,0,0, 0.9)',
	boxShadow: 24,
	p: 4,
	overflow: 'scroll',
}

export const FeedbackModal = () => {
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<div className="btn__box">
				<button className="btn" onClick={handleOpen}>
					<div className="btn__content">КОНТАКТ </div>
				</button>
			</div>
			<Modal
				
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<div className="sc-feedback__pop-up overlay-active">
						<div className="btn__box--modal-close">
							<button className="btn" onClick={handleClose}>
								<div className="btn__content">&times;</div>
							</button>
						</div>
						<ClientForm />
					</div>
				</Box>
			</Modal>
		</>
	)
}
