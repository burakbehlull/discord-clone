import React from 'react';
import { CreateServerModalProps } from '@types'


const CreateServerModal: React.FC<CreateServerModalProps> = ({ closeModal }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-discord-200 p-6 rounded-lg w-96 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-white text-lg font-bold mb-4">Yeni Sunucu Oluştur</h2>
        <input
          type="text"
          placeholder="Sunucu Adı"
          className="w-full px-4 py-2 rounded bg-discord-100 text-white placeholder:text-discord-500 focus:outline-none mb-4"
        />
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
            onClick={closeModal}
          >
            İptal
          </button>
          <button className="px-4 py-2 bg-discord-400 text-white rounded hover:bg-discord-500">
            Oluştur
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateServerModal;
