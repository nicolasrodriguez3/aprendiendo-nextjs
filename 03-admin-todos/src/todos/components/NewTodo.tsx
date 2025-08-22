'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import { IoTrashOutline } from "react-icons/io5";

import { createTodo, deleteCompletedTodos } from '../helpers/todos';
import { addTodo, deleteCompleted } from '../actions/actions';


export const NewTodo = () => {
  const router = useRouter()
  const [description, setDescription] = useState('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!description) return

    addTodo(description)
    // createTodo(description)
    setDescription('')

    // router.refresh()
  }

  const handleDeleteCompleted = async () => {
    // deleteCompletedTodos()
    // router.refresh()
    await deleteCompleted()
  }

  return (
    <form className="flex" onSubmit={onSubmit}>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        className="w-6/12 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?" />

      <button type="submit" className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
        Crear
      </button>

      <span className='flex flex-1'></span>

      <button
        onClick={() => handleDeleteCompleted()}
        type="button" className="flex items-center gap-2 justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
        Borrar completados
      </button>

    </form>
  )
}