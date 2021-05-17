import React, { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

import images from '../../assets'

/**
 * Dropzone component for personal info picture.
 *
 * @param {Boolean} edit
 * @param {*} file
 * @param {Function} setFile
 * @param {String} avatar
 * @returns {Component}
 *
 */
function DropZone ({ edit, file, setFile, avatar }) {
  /**
   * Dropzone config and get accepted file which
   * used "useDropzone" of react-dropzone.
   */
  const { open, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      const accepted = acceptedFiles[0]
      setFile(Object.assign(accepted, {
        preview: URL.createObjectURL(accepted)
      }))
    }
  })

  /**
   * useEffect(willReceiveProps lifecycle) for get files from dropzone.
   */
  useEffect(() => () => {
    file && URL.revokeObjectURL(file.preview)
  }, [file])

  /**
   * Profile logo component.
   *
   * @param {String} path
   * @returns {Component}
   *
   */
  const ProfileLogo = ({ path }) => (
    <div className='profile-logo relative'>
      {edit && <EditPhoto />}
      <img src={path} alt='profile-logo' />
    </div>
  )

  /**
   * Edit photo section when edit is enabled.
   */
  const EditPhoto = () => (
    <div
      onClick={open}
      className='edit-photo is-flex align flex-center'
    >
      <strong>Add new photo</strong>
    </div>
  )

  return (
    <>
      <input {...getInputProps()} />
      <div className='p-avatar is-flex align flex-center cursor'>
        {file
          ? <ProfileLogo path={file.preview} key={file} />
          : avatar
            ? <ProfileLogo path={avatar} />
            : <ProfileLogo path={images.UserAvatar} />}
      </div>
    </>
  )
}

export default DropZone
