import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from '@/components/Formulario/FormField';
import InputField from '@/components/Formulario/InputField';
import { useForm } from '@/hooks/useForm';

/**
 * Permite ao usuário preencher dados pessoais
 */
export default function FormularioCadastro() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const {
    formData,
    validation,
    updateField,
    isFormValid,
    resetForm,
    formatCPF,
    formatPhone,
  } = useForm();

  /**
   * Manipula o envio do formulário
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios corretamente.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Simula envio dos dados
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Limpa o formulário após sucesso
      resetForm();
      navigate('/');
      
    } catch (error) {
      setErrorMessage('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  //Manipula o cancelamento do formulário
  const handleCancel = () => {
    if (window.confirm('Tem certeza que deseja cancelar? Todos os dados serão perdidos.')) {
      resetForm();
      navigate('/');
    }
  };

  return (
      <main >
        <h1 className='text-center mb-5 text-fontPrimary text-2xl font-bold font-atkinson'>Formulário de Atendimento</h1>
      
        <div className='alerta-obrigatorio bg-[color-mix(in_oklab,theme(colors.backBtn)_15%,white)] border-l-[5px] border-l-clikColor p-[10px_14px] mb-4 rounded-[5px] text-xs text-fontTertiary font-atkinson'>
          <p>
            Por favor, preencha todos os campos abaixo.
            Os campos marcados com <strong>*</strong> são obrigatórios.
          </p>
        </div>

        <form id='form-pre-atendimento' onSubmit={handleSubmit} className='space-y-4'>
          <FormField label='Nome completo' required>
            <InputField
              type='text'
              name='nome'
              id='nome'
              value={formData.nome}
              onChange={(value) => updateField('nome', value)}
              placeholder='Digite seu nome'
              required
              maxLength={100}
              isValid={validation.nome}
            />
          </FormField>

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

          <FormField label='E-mail'>
            <InputField
              type='email'
              name='email'
              id='email'
              value={formData.email || ''}
              onChange={(value) => updateField('email', value)}
              placeholder='seuemail@email.com'
              maxLength={100}
              isValid={validation.email}
            />
          </FormField>

          <FormField label='Telefone' required>
            <InputField
              type='tel'
              name='telefone'
              id='telefone'
              value={formData.telefone}
              onChange={(value) => updateField('telefone', formatPhone(value))}
              placeholder='(11) 91234-5678'
              required
              isValid={validation.telefone}
            />
          </FormField>

        <button 
          type='submit' 
          id='botao-enviar' 
          disabled={!isFormValid() || isSubmitting}
          className='bg-backBtn p-[10px] border-none rounded-[6px] text-lg cursor-pointer mt-[15px] w-full text-white hover:bg-hoverBtn disabled:bg-[#ccc] disabled:cursor-not-allowed font-atkinson'
        >
          {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
        </button>
      </form>
      
      <button 
        type='button' 
        id='botao-cancelar' 
        onClick={handleCancel}
        className='bg-backBtn p-[10px] border-none rounded-[6px] text-lg cursor-pointer mt-[15px] w-full text-white hover:bg-hoverBtn font-atkinson'
      >
        CANCELAR
      </button>
      
      {errorMessage && (
        <div id='mensagem-erro' className='mt-4 p-3 bg-red-50 text-red-700 border border-red-200 rounded-md text-center font-atkinson'>
          {errorMessage}
        </div>
      )}
      </main>
  );
}
