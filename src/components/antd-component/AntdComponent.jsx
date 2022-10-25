import React from "react";
import { Form, Input } from "antd";
import { emailRegex } from "../../utils/Constants";

export const NormalInput = (props) => {
  return (
        <div>
            <Form.Item
                // name={fieldName}
                // label={labelName}
                rules={
                    [
                      { required: true, message: "" }
                    ]}>
                <Input
                    placeholder=''
                    suffix="%"
                    prefix="%%"
                    maxLength={45}
                    showCount
                />
            </Form.Item>
            <Form.Item
                // name={fieldName}
                // label={labelName}
                rules={
                    [
                      { pattern: emailRegex, message: "" },
                      { required: true, message: "" }
                    ]}>
                <Input
                    placeholder=''
                    suffix="%"
                    prefix="%%"
                    maxLength={20}
                    showCount
                />
            </Form.Item>
        </div>
  );
};
export const EmailInput = () => {
  return (
        <>
            <Form.Item
                rules={
                    [
                      { required: true, message: "Email is required" },
                      { type: "email", message: "" },
                      {}
                    ]
                }>
                <Input
                    placeholder=''
                    suffix=""
                    prefix=""
                    maxLength={40}
                    showCount
                />
            </Form.Item>
        </>
  );
};
export const AlphabaticInput = () => {};
export const NumberInput = () => {};
export const Description = () => {};
// export const ModalComponent = (props) => {
//   const [modalOpen, modalClose] = useState();
//   const openModal = () => { modalClose(true); };
//   const closeModal = () => { modalClose(false); };
//   const { className, children } = props;

//   return (
//         <Modal
//             title={false}
//             open={modalOpen}
//             onCancel={closeModal}
//             footer={false}
//             className={`${className} class`}
//             {...props}
//         >
//             {children}
//         </Modal>
//   );
// };
export const SelectComponent = () => {
  return (
        <div>AntdComponent</div>
  );
};
