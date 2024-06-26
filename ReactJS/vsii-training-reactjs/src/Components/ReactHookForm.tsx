// ReactHookForm.tsx
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

interface Inputs {
  name: string;
  email: string;
  age: number;
}

const ReactHookForm: React.FC = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>();

  // In ra dữ liệu và reset lại các trường dữ liệu
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  // Logic xử lý validate dữ liệu
  const registerOptions = {
    name: {
      required: 'Yêu cầu nhập tên',
      validate: (value: string) =>
        /^[^\d]*$/.test(value) || 'Tên không được chứa số'
    },
    email: {
      required: 'Yêu cầu nhập email',
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: 'Không đúng định dạng email'
      }
    },
    age: {
      required: 'Yêu cầu nhập tuổi',
      validate: (value: number) =>
        (value >= 18 && value <= 65) || 'Tuổi nằm trong khoảng 18 đến 65'
    }
  };

  return (
    <>
      <h2>---React Hook Form---</h2>

      {/* Name */}
      <Form className="container w-50" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-2" controlId="formBasicName">
          <Form.Label as={'b'}>Họ tên</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tên"
            {...register('name', registerOptions.name)}
          />
          <Form.Text className="text-danger">
            {errors.name && errors.name.message}
          </Form.Text>
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label as={'b'}>Địa chỉ Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập email"
            {...register('email', registerOptions.email)}
          />
          <Form.Text className="text-danger">
            {errors.email && errors.email.message}
          </Form.Text>
        </Form.Group>

        {/* Age */}
        <Form.Group className="mb-2" controlId="formBasicAge">
          <Form.Label as={'b'}>Độ tuổi</Form.Label>
          <Form.Control
            type="number"
            placeholder="Nhập tuổi"
            {...register('age', registerOptions.age)}
          />

          <Form.Text className="text-danger">
            {errors.age && errors.age.message}
          </Form.Text>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Đăng ký
          </Button>
        </div>
      </Form>

      {showAlert && (
        <div
          className="alert alert-success fixed-top mt-3 mx-auto"
          role="alert"
          style={{ width: '50%' }}
        >
          Biểu mẫu đã được gửi thành công!
        </div>
      )}
    </>
  );
};

export default ReactHookForm;
