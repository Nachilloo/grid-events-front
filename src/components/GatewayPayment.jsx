import { CardElement, useElements, useStripe, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button, TextField, Container, Typography, CssBaseline, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
const PUBLIC_KEY = "tu_public_key_de_stripe"; // Reemplaza con tu clave pública de Stripe
const stripePromise = loadStripe(PUBLIC_KEY);

const StyledContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
}));
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    maxWidth: 600,
    width: '100%',
    boxShadow: theme.shadows[5],
}));
const CardElementContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    border: '1px solid #ccc',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
}));
const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const handlePayment = () => {
    alert(`Compra realizada con éxito`);
    navigate('/')
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            const response = await fetch('http://localhost:3001/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: 1000, 
                    id: paymentMethod.id
                })
            });
            const paymentResponse = await response.json();
            if (paymentResponse.success) {
                console.log('Pago exitoso');
            } else {
                console.log('Pago fallido');
            }
        }
    };
    return (
        <StyledContainer>
            <CssBaseline />
            <StyledPaper>
                <Typography variant="h5" gutterBottom>
                    Pasarela de pago
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField label="Nombre" variant="outlined" fullWidth margin="normal" required />
                    <CardElementContainer>
                        <CardElement options={{ hidePostalCode: true }} />
                    </CardElementContainer>
                    <Button onClick={handlePayment} type="submit" variant="contained" color="primary" fullWidth>
                        Realizar Pago
                    </Button>
                </form>
            </StyledPaper>
        </StyledContainer>
    );
};

const GatewayPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    );
};
export default GatewayPayment;