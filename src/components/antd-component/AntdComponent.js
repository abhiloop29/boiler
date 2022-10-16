import React from 'react'
import { Form, Input } from 'antd'
import { emailRegex } from '../../utils/Constants';

export const InputComponent = () => {
    return (
        <div>
            <Form.Item
                // name={fieldName}
                // label={labelName}
                rules={
                    [
                        { type: 'email', message: 'Invalid' },
                        { pattern: emailRegex, message: '' },
                        { required: true, message: '' },
                    ]}>
                <Input
                    placeholder='' //placeholder text
                    suffix="%" //icon or symbol at the end
                    prefix="%%"//icon or symbol in start
                    maxLength={20} //the number of letter someone can enter
                    showCount // whether we want to show numbers at the end

                />
            </Form.Item>
            <Form.Item
                // name={fieldName}
                // label={labelName}
                rules={
                    [
                        { pattern: emailRegex, message: '' },
                        { required: true, message: '' },
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
    )
}
export const ModalComponent = () => {
    return (
        <div>AntdComponent</div>
    )
}
export const SelectComponent = () => {
    return (
        <div>AntdComponent</div>
    )
}
