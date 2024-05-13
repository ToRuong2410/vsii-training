import React, { ChangeEvent, useState } from 'react';
import { Form, Image } from 'react-bootstrap';

const ImageUpload = () => {
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      // Kiểm tra kiểu tệp
      if (!file.type.startsWith('image/')) {
        setErrorMessage('Only image files are allowed.');
        return;
      }
      // Kiểm tra kích thước tệp
      if (file.size > 5 * 1024 * 1024) {
        // 5MB = 5bytes * 1024(kb) * 1024(mb)
        setErrorMessage('File size should be less than 5MB.');
        return;
      }

      setPreviewURL(URL.createObjectURL(file));
      setErrorMessage(null);
    }
  };

  return (
    <div>
      <Form.Group
        controlId="formFileLg"
        className="mb-3"
        onChange={handleImageChange}
      >
        <Form.Control type="file" size="lg" />
      </Form.Group>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {previewURL && (
        <div>
          <Image
            rounded
            src={previewURL}
            alt="Hình ảnh"
            style={{ maxWidth: '100%', maxHeight: '300px' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
