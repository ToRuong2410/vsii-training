import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  message: string;
};

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues
  } = useForm<Inputs>();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    reset();
  };

  const registerOptions = {
    name: { required: 'Name is required' },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: 'Invalid email address'
      }
    },
    password: { required: 'Password is required' },
    confirmPassword: {
      required: 'Please confirm your password',
      validate: (value: string) =>
        value === getValues('password') || ' Passwords do not match'
    }
  };

  return (
    <>
      <h2>---React Hook Form---</h2>

      <Form className="container" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-2" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            {...register('name', registerOptions.name)}
          />
          <Form.Text className="text-danger">
            {errors.name && errors.name.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register('email', registerOptions.email)}
          />
          <Form.Text className="text-danger">
            {errors.email && errors.email.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div style={{ display: 'flex' }}>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register('password', registerOptions.password)}
            />
            <Button
              variant="outline-secondary"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <i className="bi bi-eye"></i>
              ) : (
                <i className="bi bi-eye-slash"></i>
              )}
            </Button>
          </div>
          <Form.Text className="text-danger">
            {errors.password && errors.password.message}
          </Form.Text>
        </Form.Group>

        {/* ConfirmPassword */}
        <Form.Group className="mb-2" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <div style={{ display: 'flex' }}>
            <Form.Control
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register('confirmPassword', registerOptions.confirmPassword)}
            />
            <Button
              variant="outline-secondary"
              onClick={() => {
                setShowConfirmPassword(!showConfirmPassword);
              }}
            >
              {showConfirmPassword ? (
                <i className="bi bi-eye"></i>
              ) : (
                <i className="bi bi-eye-slash"></i>
              )}
            </Button>
          </div>
          <Form.Text className="text-danger">
            {errors.confirmPassword && errors.confirmPassword.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default HookForm;
