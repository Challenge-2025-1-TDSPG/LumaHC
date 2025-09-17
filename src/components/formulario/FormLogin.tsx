
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from '@/components/Formulario/FormField';
import InputField from '@/components/Formulario/InputField';
import { useForm } from '@/hooks/useForm';

export default function Login() {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const {
        formData,
        validation,
        updateField,
        resetForm,
        formatCPF,
    } = useForm();

    // Validação
    const isLoginValid = () => {
        return validation.cpf && validation.dataNascimento;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLoginValid()) {
            setErrorMessage('Preencha CPF e data de nascimento corretamente.');
            return;
        }
        setIsSubmitting(true);
        setErrorMessage('');
        try {
            // Simula autenticação
            await new Promise(resolve => setTimeout(resolve, 1500));
            resetForm();
            navigate('/');
        } catch (error) {
            setErrorMessage('Erro ao fazer login. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCancel = () => {
        if (window.confirm('Deseja cancelar o login?')) {
            resetForm();
            navigate('/');
        }
    };

    return (
        <main>
            <h1 className='text-center mb-5 text-fontPrimary text-2xl font-bold font-atkinson'>Acesse sua conta</h1>
            <form id='form-login' onSubmit={handleSubmit} className='space-y-4'>
                <FormField label='CPF' required>
                    <InputField
                        type='text'
                        name='cpf'
                        id='cpf'
                        value={formData.cpf}
                        onChange={(value) => updateField('cpf', formatCPF(value))}
                        placeholder='000.000.000-00'
                        required
                        isValid={validation.cpf}
                    />
                </FormField>

                <FormField label='Data de nascimento' required>
                    <InputField
                        type='date'
                        name='dataNascimento'
                        id='dataNascimento'
                        value={formData.dataNascimento}
                        onChange={(value) => updateField('dataNascimento', value)}
                        required
                        isValid={validation.dataNascimento}
                    />
                </FormField>

                <button
                    type='submit'
                    id='botao-login-enviar'
                    disabled={!isLoginValid() || isSubmitting}
                    className='bg-backBtn p-[10px] border-none rounded-[6px] text-lg cursor-pointer mt-[15px] w-full text-white hover:bg-hoverBtn disabled:bg-[#ccc] disabled:cursor-not-allowed font-atkinson'
                >
                    {isSubmitting ? 'ENTRANDO...' : 'ENTRAR'}
                </button>
            </form>

            <button
                type='button'
                id='botao-login-cancelar'
                onClick={handleCancel}
                className='bg-backBtn p-[10px] border-none rounded-[6px] text-lg cursor-pointer mt-[15px] w-full text-white hover:bg-hoverBtn font-atkinson'>
                CANCELAR
            </button>

            {errorMessage && (
                <div id='mensagem-erro-login' className='mt-4 p-3 bg-red-50 text-red-700 border border-red-200 rounded-md text-center font-atkinson'>
                    {errorMessage}
                </div>
            )}
        </main>
    );
}