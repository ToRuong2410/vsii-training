// ReactHookForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactHookForm from './ReactHookForm';
import userEvent from '@testing-library/user-event';

describe('ReactHookForm', () => {
  test('renders the form correctly', () => {
    //Render component để có thể kiểm tra nó.
    render(<ReactHookForm />);

    // Tìm các trường nhập theo Placeholders
    // -> expect...toBeInTheDocument để kiểm tra rằng các trường nhập liệu tồn tại
    expect(screen.getByPlaceholderText('Nhập tên')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Nhập email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Nhập tuổi')).toBeInTheDocument();
  });

  test('shows validation errors when submitted with empty or invalid data', async () => {
    //Render component để có thể kiểm tra nó.
    render(<ReactHookForm />);

    // Mô tả sự kiện người dùng click vào nút Đăng ký
    fireEvent.click(screen.getByText('Đăng ký'));

    // Tìm các trường nhập theo text
    // -> expect...toBeInTheDocument để kiểm tra rằng các trường nhập liệu tồn tại
    expect(await screen.findByText('Yêu cầu nhập tên')).toBeInTheDocument();
    expect(await screen.findByText('Yêu cầu nhập email')).toBeInTheDocument();
    expect(await screen.findByText('Yêu cầu nhập tuổi')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Nhập tên'), {
      target: { value: 'number 1' }
    });
    fireEvent.change(screen.getByPlaceholderText('Nhập email'), {
      target: { value: 'invalid-email' }
    });
    fireEvent.change(screen.getByPlaceholderText('Nhập tuổi'), {
      target: { value: '17' }
    });

    // Mô tả sự kiện người dùng click vào nút Đăng ký
    fireEvent.click(screen.getByText('Đăng ký'));

    // Tìm các trường nhập theo text
    // -> expect...toBeInTheDocument để kiểm tra rằng các trường nhập liệu tồn tại
    expect(
      await screen.findByText('Tên không được chứa số')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Không đúng định dạng email')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Tuổi nằm trong khoảng 18 đến 65')
    ).toBeInTheDocument();
  });

  test('submits the form correctly when valid data is provided', async () => {
    render(<ReactHookForm />);

    // Mô tả sự kiện người dùng change giá trị trong các trường input
    fireEvent.change(screen.getByPlaceholderText('Nhập tên'), {
      target: { value: 'ToRuong' }
    });
    fireEvent.change(screen.getByPlaceholderText('Nhập email'), {
      target: { value: 'truong@gmail.com' }
    });
    fireEvent.change(screen.getByPlaceholderText('Nhập tuổi'), {
      target: { value: '22' }
    });

    // Mô tả sự kiện người dùng click vào button Đăng ký
    fireEvent.click(screen.getByText('Đăng ký'));

    // Chờ không còn tồn tại thông báo lỗi
    // -> waitFor là một hàm cho phép bạn đợi một điều kiện nào đó trở thành
    // đúng trước khi tiếp tục thực hiện các bước kiểm thử tiếp theo.
    await waitFor(() =>
      expect(screen.queryByText('Yêu cầu nhập tên')).not.toBeInTheDocument()
    );
    await waitFor(() =>
      expect(
        screen.queryByText('Tên không được chứa số')
      ).not.toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.queryByText('Yêu cầu nhập email')).not.toBeInTheDocument()
    );
    await waitFor(() =>
      expect(
        screen.queryByText('Không đúng định dạng email')
      ).not.toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.queryByText('Yêu cầu nhập tuổi')).not.toBeInTheDocument()
    );
    await waitFor(() =>
      expect(
        screen.queryByText('Tuổi nằm trong khoảng 18 đến 65')
      ).not.toBeInTheDocument()
    );
    await waitFor(() =>
      expect(
        screen.getByText('Biểu mẫu đã được gửi thành công!')
      ).toBeInTheDocument()
    );
  });
});
