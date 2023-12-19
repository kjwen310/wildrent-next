'use client'

import { useState, useMemo } from "react"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import dynamic from 'next/dynamic';
import ImageUpload from "@/components/image/ImageUpload"
import { categoryList, siteList } from "@/staticData"
import Heading from "@/components/shared/Heading"
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { toast } from 'react-hot-toast'

enum STEPS {
  INFO = 0,
  CATEGORY = 1,
  LOCATION = 2,
  IMAGE = 3,
  POINT = 4,
}

export default function AddProduct() {
  const [step, setStep] = useState(STEPS.INFO)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<FieldValues>({
    defaultValues: {
      name: '',
      description: '',
      categoryId: '',
      subCategoryId: '',
      locationId: '',
      imageSrc: '',
      point: 10,
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log('aaa', data);
    setIsLoading(false);
  }

  const onSiteClick = (id: string) => {
    console.log(id)
    form.setValue("locationId", id, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    })
  }

  const onImageChange = (value: string) => {
    console.log(value)
    form.setValue("imageSrc", value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    })
  }

  const onBack = () => {
    if (step === 0) router.push('/my-product')
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const nextText = useMemo(() => {
    if (step === STEPS.POINT) return '建立';
    return '下一步';
  }, [step]);

  const backText = useMemo(() => {
    if (step === STEPS.INFO) return "返回";
    return '上一步';
  }, [step]);

  const categoryOptions = categoryList.map((category) => ({
    name: category.title,
    value: category.id,
  }));

  const subCategoryOptions = categoryList
    .find((category) => category.id === form.getValues("categoryId"))?.subCategory
    .map((sub) => ({
      name: sub.title,
      value: sub.id,
    })
  );

  const isLocation = useMemo(() => {
    step === STEPS.LOCATION
  }, [step])

  const Map = useMemo(() => dynamic(() => import('@/components/shared/Map'), {
    ssr: false
  }), [isLocation])

  const cityOptions = [
    { name: '台北市', value: '台北市' },
    { name: '台中市', value: '台中市' },
  ]

  return (
    <Form {...form}>
      <form className="w-full h-[calc(100vh-128px)] flex flex-col justify-between">

        <div className={`
          w-full
          relative
          space-y-4
          max-w-lg
          mx-auto
          ${step === STEPS.LOCATION ? "pt-[500px]" : "pt-[300px]"}
        `}>
            <div className={`
              space-y-4
              absolute
              top-0
              left-0
              right-0
              ${step === STEPS.INFO ? "visible" : "invisible"}`}
            >
              <Heading
                title="提供商品基本資訊"
                subtitle="請提供商品名稱，並填寫適當描述，例如尺寸、重量、適用活動與場景、使用注意事項等，幫助人們更了解這項商品。"
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>商品名稱</FormLabel>
                    <FormControl>
                      <Input placeholder="請輸入商品名稱" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>商品敘述</FormLabel>
                    <FormControl>
                      <Textarea placeholder="請輸入相關敘述" rows={8} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className={`
              space-y-4
              absolute
              top-0
              left-0
              right-0
              ${step === STEPS.CATEGORY ? "visible" : "invisible"}`}
            >
              <Heading
                title="選擇所屬類別"
                subtitle="請選擇該商品最適切的類別，幫助人們快速搜尋到這項商品。"
              />
              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>商品類別</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="請選擇商品最適合的類別" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categoryOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>子類別</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="請選擇最適合的子類別" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {subCategoryOptions?.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <div className={`
              space-y-4
              absolute
              top-0
              left-0
              right-0
              ${step === STEPS.LOCATION ? "visible" : "invisible"}`}
            >
              <Heading
                title="選擇交換站點"
                subtitle="請選擇該商品預計寄放的交換站點。您上架商品的一天內，應將商品提供給交換站點。"
              />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="請輸入縣市篩選" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {cityOptions.map((city) => (
                      <SelectItem key={city.value} value={city.value}>{city.name}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {step === STEPS.LOCATION && <Map siteList={siteList} isModal onSiteClick={onSiteClick} />}
            </div>

            <div className={`
              space-y-4
              absolute
              top-0
              left-0
              right-0
              z-[10000]
              ${step === STEPS.IMAGE ? "visible" : "invisible"}`}
            >
              <Heading
                title="上傳商品圖片"
                subtitle="請上傳適當的商品圖片，您可以從自己的裝置或雲端上傳。此外受限於服務，目前一項商品僅能上傳一張。"
              />
              <ImageUpload
                value={form.getValues("imageSrc")}
                onChange={onImageChange}
              />
            </div>

            <div className={`
              space-y-4
              absolute
              top-0
              left-0
              right-0
              ${step === STEPS.POINT ? "visible" : "invisible"}`}
            >
              <Heading
                title="選擇商品所需點數"
                subtitle="請選擇下列最適合該商品的點數"
              />
              <FormField
                control={form.control}
                name="point"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>商品購買點數</FormLabel>
                    <FormControl>
                      <Input placeholder="請設定商品的購買點數" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              /> 
            </div>
        </div>

        <div>
          <Progress value={(step + 1) * 100 / 5} className="w-full" />

          <div className="px-20 py-4 flex justify-between">
            <Button
              type="button"
              variant="ghost"
              className="underline"
              size="lg"
              onClick={onBack}
            >
              {backText}
            </Button>
            <Button
              type="button"
              size="lg"
              onClick={onNext}
            >
              {nextText}
              </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
