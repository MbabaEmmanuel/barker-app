import react from "react"
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Full Name"
          autoComplete="off"
          {...register("fullName", {
            required: 'Full name is required.'
          })}
          className= {`${errors.fullName ? 'input-error' : ''}`} 
        />
        {errors.fullName && (
            <p className="errorMsg">{errors.fullName.message}</p>
          )}
      </Form.Group>

      <Form.Group controlId="formBasicPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control 
          type="Tel" 
          placeholder="Enter Phone Number"
          autoComplete="off"
          {...register("telephone", {
            required: 'Phone Number is required.'
          })}
          className= {`${errors.telephone ? 'input-error' : ''}`} 
        /> 
        {errors.telephone && (
            <p className="errorMsg">{errors.telephone.message}</p>
          )}
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email"
          autoComplete="off"
          {...register("email", {
            required: 'Email is required.'
          })}
          className= {`${errors.email ? 'input-error' : ''}`} 
        />
        {errors.email && (
            <p className="errorMsg">{errors.email.message}</p>
          )}
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password"
          autoComplete="off" 
          {...register("password", {
            required: 'Password is required.'
          })}
          className= {`${errors.password ? 'input-error' : ''}`} 
        />
        {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
}

export default Login;