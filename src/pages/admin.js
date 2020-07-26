import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { selectToken } from "../store/user/selectors"
import { logOut } from "../store/user/actions"
import UploadImageForm from "../components/uploadImageForm"

export default function Admin() {
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const history = useHistory()

  useEffect(() => {
    if (token == null) {
      history.push("/login")
    }
  }, [token, history])

  return (
    <div>
      <h2>Admin page</h2>
      <br></br>
      <UploadImageForm />
      <br></br>
      <br></br>
      <button onClick={() => dispatch(logOut())}>Log out</button>
    </div>
  )
}