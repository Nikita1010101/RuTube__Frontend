import { ChangeEvent, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'

import { VideoService } from '@/services/video.service'

export const useUploadVideo = ({
  handleCloseModal,
  videoId,
}: {
  handleCloseModal: () => void
  videoId: number
}) => {
  const [progressPercent, setProgressPercent] = useState<number>(0)
  const [previewPath, setPreviewPath] = useState<string>('')
  const [videoFileName, setIsVideoFileName] = useState<string>('')
  const [videoDuration, setVideoDuration] = useState<number>(0)
  const [isPublic, setIsPublic] = useState<boolean>(false)
  const [isChosen, setIsChosen] = useState<boolean>(false)
  const [isUploaded, setIsUploaded] = useState<boolean>(false)

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    register,
  } = useForm<{ preview: FileList; title: string; description: string }>({
    mode: 'onChange',
  })

  const changeProgress = (value: number) => {
    if (value == 100) setIsUploaded(true)
    setProgressPercent(value)
  }

  const { mutateAsync: uploadVideo } = useMutation({
    mutationKey: ['video_upload'],
    mutationFn: (data: FormData) =>
      VideoService.updateVideo(data, changeProgress),
    onSuccess: () => {
      console.log('success')
    },
    onError: (error: any) => {
      throw new Error(error)
    },
  })

  const { mutateAsync: uploadVideoContent } = useMutation({
    mutationKey: ['video_content_upload'],
    mutationFn: (data: FormData) => VideoService.updateVideoContent(data),
    onSuccess: () => {
      handleCloseModal()
      reset()
    },
    onError: (error: any) => {
      throw new Error(error)
    },
  })

  const onSubmit: SubmitHandler<{
    preview: FileList
    title: string
    description: string
  }> = (data) => {
    const body = new FormData()

    body.append('videoId', String(videoId))
    body.append('title', data.title)
    body.append('description', data.description)
    body.append('public', String(isPublic || ''))
    body.append('preview', data.preview[0])

    uploadVideoContent(body)
  }

  const calculateVideoDuration = (file: Blob) => {
    const URL = window.URL || window.webkitURL
    const fileURL = URL.createObjectURL(file)
    const video = document.createElement('video')
    video.src = fileURL

    video.onloadedmetadata = () => {
      setVideoDuration(Math.round(video.duration))
    }
  }

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files

    if (!files?.length) return

    calculateVideoDuration(files[0])
    setIsChosen && setIsChosen(true)

    const formData = new FormData()
    formData.append('videoId', String(videoId))
    formData.append('duration', String(videoDuration))
    formData.append('video', files[0])

    await uploadVideo(formData)
  }

  const changePreview = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files

    if (!files?.length) return

    setIsVideoFileName(files[0].name)

    const fileReader = new FileReader()
    fileReader.readAsDataURL(files[0])

    fileReader.onload = () => {
      setPreviewPath(fileReader.result as string)
    }
  }

  return {
    form: {
      control,
      errors,
      handleSubmit,
      onSubmit,
      register,
    },
    media: {
      uploadFile,
      videoFileName,
      previewPath,
      changePreview,
    },
    status: {
      isChosen,
      isUploaded,
      progressPercent,
      setIsChosen,
      isPublic,
      setIsPublic,
    },
  }
}
