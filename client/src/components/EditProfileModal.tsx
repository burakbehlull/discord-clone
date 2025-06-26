import React from 'react';
import { EditProfileModalProps } from '@types'



const EditProfileModal: React.FC<EditProfileModalProps> = ({ avatar, username, setUsername, close, save }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={close}
    >
      <div
        className="bg-discord-200 p-6 rounded-lg w-96 shadow-lg text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-white text-xl font-bold mb-4">Profili Düzenle</h2>

        <img
          src={avatar}
          alt="avatar"
          className="w-20 h-20 rounded-full mx-auto border-4 border-discord-400 mb-4"
        />

        <label className="text-discord-500 text-sm block mb-1 text-left">Kullanıcı Adı</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded bg-discord-100 text-white placeholder:text-discord-500 focus:outline-none"
        />

        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
            onClick={close}
          >
            İptal
          </button>
          <button
            className="px-4 py-2 bg-discord-400 text-white rounded hover:bg-discord-500"
            onClick={save}
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
