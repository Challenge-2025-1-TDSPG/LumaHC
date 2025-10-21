import FaceCheck from '@/components/Check/FaceCheck';
import MicrophoneCheck from '@/components/Check/MicrophoneCheck';
import { useEffect } from 'react';

/** Página de teste de câmera, enquadramento e microfone. */
export default function CameraCheck() {
  useEffect(() => {
    document.title = 'Teste de Câmera e Microfone';
  }, []);

  return (
    <main aria-label='Página de teste de câmera e microfone' className='w-full bg-backPrimary'>
      <div className='mx-auto w-full max-w-screen-lg px-5 py-8 flex flex-col items-center gap-12'>
        <FaceCheck />
        <MicrophoneCheck />
      </div>
    </main>
  );
}
