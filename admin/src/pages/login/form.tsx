import {
  Form,
  Input,
  Checkbox,
  Link,
  Button,
  Space,
} from '@arco-design/web-react';
import { FormInstance } from '@arco-design/web-react/es/Form';
import { IconLock, IconUser } from '@arco-design/web-react/icon';
import React, { useEffect, useRef, useState } from 'react';
import {login as adminLogin} from '@/api/login'
import useStorage from '@/utils/useStorage';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import styles from './style/index.module.less';

export default function LoginForm() {
  const formRef = useRef<FormInstance>();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginParams, setLoginParams, removeLoginParams] =
    useStorage('loginParams');
  const [form] = Form.useForm()

  const locales = useLocale(locale);

  const [rememberPassword, setRememberPassword] = useState(!!loginParams);

  function afterLoginSuccess(params) {
    // 记住密码
    if (rememberPassword) {
      setLoginParams(JSON.stringify(params));
    } else {
      removeLoginParams();
    }
    // 记录登录状态
    localStorage.setItem('token', params.token);
    // localStorage.setItem('userName',params.userName)
    // 跳转首页
    window.location.href = '/';
  }

  async function login(params) {
    setErrorMessage('');
    setLoading(true);
    try {
      const res:any =await adminLogin(params)
      if(res.data){
        if(res.code === 0){
          afterLoginSuccess(res.data)
        }
      }else{
        setErrorMessage(res.msg)
      }
    } catch (error) {
      
    }finally{
      setLoading(false)
    }
  }

  async function onSubmitClick() {
    // formRef.current.validate().then((values) => {
    //   login(values);
    // });
    try {
      await form.validate();
      const values = await form.getFields()
      console.log(values);
      login(values)
    } catch (error) {
      console.log('信息错误');

    }
  }

  // 读取 localStorage，设置初始值
  useEffect(() => {
    const rememberPassword = !!loginParams;
    setRememberPassword(rememberPassword);
    if (formRef.current && rememberPassword) {
      const parseParams = JSON.parse(loginParams);
      formRef.current.setFieldsValue(parseParams);
    }
  }, [loginParams]);

  return (
    <div className={styles['login-form-wrapper']}>
      <div className={styles['login-form-title']}>{locales['login.form.title']}</div>
      <div className={styles['login-form-sub-title']}>
        {locales['login.form.title']}
      </div>
      <div className={styles['login-form-error-msg']}>{errorMessage}</div>
      <Form
        form={form}
        className={styles['login-form']}
        layout="vertical"
        ref={formRef}
        initialValues={{ userName: 'admin', password: 'admin' }}
      >
        <Form.Item
          field="userName"
          rules={[{
            required: true,
            message: locales['login.form.userName.errMsg']
          },
          {
            match: /^[\u4E00-\u9FA5A-Za-z0-9_]{2,12}$/,
            message: locales['login.form.userName.matchMsg']
          }]}
        >
          <Input
            prefix={<IconUser />}
            placeholder={locales['login.form.userName.placeholder']}
            onPressEnter={onSubmitClick}
          />
        </Form.Item>
        <Form.Item
          field="password"
          rules={[
            {
              required: true,
              message: locales['login.form.password.errMsg']
            },
            {
              match: /^[A-Za-z0-9_]{5,15}$/,
              message: locales['login.form.password.matchMsg']
            }]}
        >
          <Input.Password
            prefix={<IconLock />}
            placeholder={locales['login.form.password.placeholder']}
            onPressEnter={onSubmitClick}
          />
        </Form.Item>
        <Space size={16} direction="vertical">
          <div className={styles['login-form-password-actions']}>
            <Checkbox checked={rememberPassword} onChange={setRememberPassword}>
              {locales['login.form.rememberPassword']}
            </Checkbox>
            <Link>{locales['login.form.forgetPassword']}</Link>
          </div>
          <Button type="primary" long onClick={onSubmitClick} loading={loading}>
            {locales['login.form.login']}
          </Button>
          <Button
            type="text"
            long
            className={styles['login-form-register-btn']}
          >
            {locales['login.form.register']}
          </Button>
        </Space>
      </Form>
    </div>
  );
}
