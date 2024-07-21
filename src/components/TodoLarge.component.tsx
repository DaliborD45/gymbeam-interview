"use client"
import { TodoT } from "@/types/todo.type"
import React, { useMemo, useState } from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import Button from "@/components/Button.component"
import { VscRequestChanges } from "react-icons/vsc"
import { useRouter } from "next/navigation"
import { MdOutlineDone, MdDeleteForever } from "react-icons/md"
import { IconType } from "react-icons"
import { deleteTodo, updateTodo } from "@/api/todo.api"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import Input from "./Input.component"
import TextArea from "./Textarea.component"
import { RiProgress3Line } from "react-icons/ri"
interface TodoLargeI {
  data: TodoT
}

interface TodoSettingI {
  Icon: IconType
  title: string
  onClick?: () => void
}

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string(),
  deadline_date: Yup.date().required("Deadline date is required"),
})

function TodoSetting({ Icon, title, onClick }: TodoSettingI) {
  return (
    <div
      className={`flex bg-slate-200 dark:bg-slate-600 dark:hover:bg-slate-700 rounded-sm p-2 items-center gap-2 hover:bg-slate-300 hover:cursor-pointer ease-linear duration-200 ${
        !onClick && "opacity-50 hover:bg-slate-200 cursor-not-allowed"
      }`}
      onClick={onClick}
    >
      <Icon className="text-md text-pink-500 dark:text-black" />
      <p className="text-sm dark:text-slate-300" >{title}</p>
    </div>
  )
}

export default function TodoLarge({ data }: TodoLargeI) {
  const router = useRouter()
  const [isUpdating, setIsUpdating] = useState(false)

  const handleChangeStateOfTodo = async (isCompleted: boolean) => {
    await updateTodo(data.todolistId, { ...data, completed: !isCompleted })
    router.push("/")
  }

  const handleDeleteTodo = async () => {
    await deleteTodo(data.todolistId, data.id)
    router.push("/")
  }
  const TODO_SETTINGS = [
    {
      Icon: VscRequestChanges,
      title: "Update",
      onClick: () => setIsUpdating((prev) => !prev),
    },
    {
      Icon: data.completed ? RiProgress3Line : MdOutlineDone,
      title: data.completed ? "Mark as not completed" : "Mark as done",
      onClick: () => handleChangeStateOfTodo(data.completed),
    },
    {
      Icon: MdDeleteForever,
      title: "Delete",
      onClick: handleDeleteTodo,
    },
  ]
  const createdAtDate = useMemo(() => {
    return new Date(data.created_at).toDateString()
  }, [data.created_at])

  const deadlineDate = useMemo(() => {
    return new Date(data.deadline_date).toDateString()
  }, [data.deadline_date])

  const handleUpdateTodo = async (values: TodoT) => {
    await updateTodo(data.todolistId, values)
    router.push("/")
  }

  return (
    <Formik
      initialValues={{
        //this generating of id is not ideal, but since BE api is not generating it, we have to handle it here
        ...data,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleUpdateTodo(values)
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="flex flex-col md:max-w-4xl mx-auto w-full bg-slate-100 dark:bg-slate-400 rounded-lg p-5">
            {isUpdating ? (
              <div className="w-[30rem] mb-4">
                <Field
                  type="text"
                  name="title"
                  errors={errors.title}
                  touched={touched.title}
                  component={Input}
                />
              </div>
            ) : (
              <h1 className="text-xl font-semibold dark:text-black">{data.title}</h1>
            )}

            <div className="flex flex-col md:flex-row justify-between gap-5">
              <div className="flex flex-col  break-words gap-2">
                <p className="text-xs font-light text-slate-500 dark:text-slate-700  mt-1">
                  Created at {createdAtDate}
                </p>
                {isUpdating ? (
                  <Field
                    label="Deadline Date"
                    type="date"
                    name="deadline_date"
                    errors={errors.deadline_date}
                    touched={touched.deadline_date}
                    component={Input}
                  />
                ) : (
                  <p className="text-sm font-semibold  mt-1 dark:text-slate-700">
                    Deadline {deadlineDate}
                  </p>
                )}

                <div className="flex gap-2 items-center mt-4">
                  <HiOutlineMenuAlt3 className="text-md text-tertiary-500 dark:text-black" />
                  <p className="text-md dark:text-black">Description</p>
                </div>
                {isUpdating ? (
                  <div className="w-[30rem]">
                    <Field
                      type="text"
                      name="description"
                      errors={errors.description}
                      touched={touched.description}
                      component={TextArea}
                    />
                  </div>
                ) : (
                  <p className="text-sm mt-1 pl-6 dark:text-black">{data.description}</p>
                )}
              </div>
              <div className="md:min-w-[10rem]">
                <h3 className="text-sm mb-2 dark:text-black">Settings</h3>
                <div className="flex flex-col gap-2">
                  {TODO_SETTINGS.map((setting, index) => (
                    <TodoSetting key={index} {...setting} />
                  ))}
                </div>
              </div>
            </div>

            {isUpdating && (
              <div className="flex gap-3 justify-start mt-10">
                <Button size="sm" variant="primary" type="submit">
                  Update
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  type="button"
                  onClick={() => setIsUpdating(false)}
                >
                  Close
                </Button>
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  )
}
