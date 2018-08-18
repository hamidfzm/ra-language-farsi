export default {
    ra: {
        action: {
            delete: 'حذف',
            show: 'نمایش',
            list: 'لیست',
            save: 'ذخیره',
            create: 'ایجاد',
            edit: 'ویرایش',
            cancel: 'انصراف',
            refresh: 'بروز‌رسانی',
            add_filter: 'اضافه‌کردن فیلتر',
            remove_filter: 'حذف این فیلتر',
            back: 'بازگشت',
        },
        boolean: {
            true: 'بله',
            false: 'خیر',
        },
        page: {
            list: 'لیست %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'ایجاد %{name}',
            delete: 'حذف %{name} #%{id}',
            dashboard: 'داشبورد',
            not_found: 'پیدا نشد'
        },
        input: {
            autocomplete: {
                none: 'هیچ',
            },
            file: {
                upload_several: 'تعدادی فایل برای آپلود دراپ کنید، یا برای انتخاب آن‌ها کلیک کنید.',
                upload_single: 'فایلی را برای آپلود دراپ کنید، یا برای انتخاب آن کلیک کنید',
            },
            image: {
                upload_several: 'تعدادی عکس برای آپلود دراپ کنید، یا برای انتخاب آن‌ها کلیک کنید.',
                upload_single: 'عکسی را برای آپلود دراپ کنید، یا برای انتخاب آن کلیک کنید',
            },
            references: {
                all_missing: 'امکان پیدا کردن اطلاعات ارجاعی وجود ندارد.',
                many_missing: 'حداقل یکی از مراجع در دسترس نیست.',
                single_missing: 'مرجع مورد نظر در دسترس نیست.',
            },
        },
        message: {
            yes: 'بله',
            no: 'خیر',
            are_you_sure: 'آیا اطمینان دارید ؟',
            about: 'درباره',
            not_found: 'شما یک نشانی اینترنتی اشتباه تایپ کردید یا پیغام بدی را دنبال کردید.',
        },
        navigation: {
            no_results: 'نتیجه‌ای پیدا نشد',
            page_out_of_boundaries: 'شماره صفحه %{page} خارج از محدوده است',
            page_out_from_end: 'نمی‌توان به بعد از صفحه آخر رفت',
            page_out_from_begin: 'نمی‌توان به قبل از صفحه اول رفت',
            page_range_info: '%{offsetBegin}-%{offsetEnd} (کل: %{total})',
            next: 'بعدی',
            prev: 'قبلی',
        },
        auth: {
            username: 'نام‌کاربری',
            password: 'رمز عبور',
            sign_in: 'ورود',
            sign_in_error: 'شناسایی با شکست مواجه شد، دوباره تلاش کنید',
            logout: 'خروج',
        },
        notification: {
            updated: 'المان بروز‌رسانی شد',
            created: 'المان ایجاد شد',
            deleted: 'المان حذف شد',
            item_doesnt_exist: 'المان پیدا نشد',
            http_error: 'خطا در برقراری ارتباط با سرور',
            bad_item: 'المان اشتباه',
        },
        validation: {
            required: 'اجباری',
            minLength: 'حداقل باید %{min} کارکتر باشد',
            maxLength: 'باید %{max} کارکتر یا کمتر باشد',
            minValue: 'حداقل باید %{min} باشد',
            maxValue: 'باید %{max} یا کمتر باشد',
            number: 'باید یک عدد باشد',
            email: 'باید یک آدرس ایمیل صحیح باشد',
        },
    },
};

