import type { TranslationMessages } from 'ra-core';

const farsiMessages: TranslationMessages = {
  ra: {
    action: {
      add_filter: 'اضافه‌کردن فیلتر',
      add: 'اضافه',
      back: 'بازگشت',
      bulk_actions:
        '۱ آیتم انتخاب شد |||| %{smart_count} عدد از آیتم‌ها انتخاب شدند',
      cancel: 'انصراف',
      clear_array_input: 'پاک‌کردن لیست',
      clear_input_value: 'پاک‌کردن مقدار',
      clone: 'شبیه‌سازی',
      confirm: 'تایید',
      create: 'ایجاد',
      create_item: 'ایجاد %{item}',
      delete: 'حذف',
      edit: 'ویرایش',
      export: 'دریافت خروجی',
      list: 'لیست',
      refresh: 'بروز‌رسانی',
      remove_filter: 'حذف این فیلتر',
      remove_all_filters: 'حذف همه‌ی فیلترها',
      remove: 'حذف',
      save: 'ذخیره',
      search: 'جست‌وجو',
      select_all: 'انتخاب همه',
      select_row: 'انتخاب این سطر',
      show: 'نمایش',
      sort: 'مرتب‌سازی',
      undo: 'لغو',
      unselect: 'عدم انتخاب',
      expand: 'بگستر',
      close: 'ببند',
      close_menu: 'بستن منو',
      update: 'بروز‌رسانی',
      open_menu: 'باز کردن منو',
      move_up: 'بالا بردن',
      move_down: 'پایین آوردن',
      open: 'باز کن',
      toggle_theme: 'تغییر تم',
      select_columns: 'ستون‌ها',
    },
    boolean: {
      true: 'بله',
      false: 'خیر',
      null: ' ',
    },
    page: {
      create: 'ایجاد %{name}',
      dashboard: 'داشبورد',
      edit: '%{name} #%{id}',
      error: 'مشکلی ایجاد شد',
      list: 'لیست %{name}',
      loading: 'در حال بارگزاری',
      not_found: 'پیدا نشد',
      show: '%{name} #%{id}',
      empty: 'هنوز سطری از %{name} وجود ندارد.',
      invite: 'آیا میخواهید یک مورد اضافه کنید؟',
    },
    input: {
      file: {
        upload_several:
          'تعدادی فایل برای آپلود دراپ کنید، یا برای انتخاب آن‌ها کلیک کنید.',
        upload_single:
          'فایلی را برای آپلود دراپ کنید، یا برای انتخاب آن کلیک کنید',
      },
      image: {
        upload_several:
          'تعدادی عکس برای آپلود دراپ کنید، یا برای انتخاب آن‌ها کلیک کنید.',
        upload_single:
          'عکسی را برای آپلود دراپ کنید، یا برای انتخاب آن کلیک کنید',
      },
      references: {
        all_missing: 'امکان پیدا کردن اطلاعات ارجاعی وجود ندارد.',
        many_missing: 'حداقل یکی از مراجع در دسترس نیست.',
        single_missing: 'مرجع مورد نظر در دسترس نیست.',
      },
      password: {
        toggle_visible: 'پنهان کردن رمز عبور',
        toggle_hidden: 'نمایش رمز عبور',
      },
    },
    message: {
      about: 'درباره',
      are_you_sure: 'آیا اطمینان دارید ؟',
      auth_error: 'خطا در احراز هویت',
      bulk_delete_content:
        'آیا از حذف  %{name} اطمینان دارید؟ |||| آیا از حدف %{smart_count} عدد از آیتم‌ها اطمینان دارید؟',
      bulk_delete_title:
        'حذف %{name} |||| حذف %{smart_count} عدد از آیتم‌های %{name}',
      clear_array_input: 'آیا از حذف همه‌ی مقادیر اطمینان دارید؟',
      bulk_update_content:
        'آیا از بروز‌رسانی %{name} اطمینان ذارید؟ |||| آیا از بروز‌رسانی %{smart_count} عدد از آیتم‌ها اطمینان دارید؟',
      bulk_update_title:
        'بروز‌رسانی %{name} |||| بروز‌رسانی %{smart_count} %{name}',
      delete_content: 'آیا از حذف این آیتم اطمینان دارید؟',
      delete_title: 'حذف %{name} #%{id}',
      details: 'جزییات',
      error: 'خطایی در مرورگر رخ داد. درخواست شما کامل نشد',
      invalid_form: 'فرم درست پر نشده است. لطفا خطاها را بررسی کنید',
      loading: 'صفحه در حال بارگزاری است، چند لحظه صبر کنید',
      no: 'خیر',
      not_found:
        'شما یک نشانی اینترنتی اشتباه تایپ کردید یا پیغام بدی را دنبال کردید.',
      yes: 'بله',
      unsaved_changes:
        'تغییرات شما ذخیره نشده اند. آیا مطمئن هستید که می خواهید از آنها چشم پوشی کنید؟',
    },
    navigation: {
      no_results: 'نتیجه‌ای پیدا نشد',
      no_more_results:
        'شماره صفحه‌ی %{page} خارج از محدوده مجاز است. صفحه قبل را امتحان کنید.',
      page_out_of_boundaries: 'شماره صفحه %{page} خارج از محدوده است',
      page_out_from_end: 'نمی‌توان به بعد از صفحه آخر رفت',
      page_out_from_begin: 'نمی‌توان به قبل از صفحه اول رفت',
      page_range_info: '%{offsetBegin}-%{offsetEnd} (کل: %{total})',
      partial_page_range_info:
        '%{offsetBegin}-%{offsetEnd} بیشتر از %{offsetEnd}',
      current_page: 'صفحه %{page}',
      page: 'برو به صفحه %{page}',
      first: 'برو به صفحه اول',
      last: 'برو به صفحه‌ آخر',
      next: 'بعدی',
      previous: 'قبلی',
      page_rows_per_page: 'تعداد ردیف‌ها در صفحه:',
      skip_nav: 'رفتن به محتوا',
    },
    sort: {
      sort_by: 'مرتب‌سازی بر اساس %{field} %{order}',
      ASC: 'صعودی',
      DESC: 'نزولی',
    },
    auth: {
      auth_check_error: 'لطفا برای ادامه وارد شوید',
      user_menu: 'پروفایل',
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
      bad_item: 'المان اشتباه',
      item_doesnt_exist: 'المان پیدا نشد',
      http_error: 'خطا در برقراری ارتباط با سرور',
      data_provider_error: 'خطا در دریافت اطلاعات',
      i18n_error: 'بارگزاری ترجمه‌ها برای زبان مورد نظر امکان‌پذیر نیست',
      canceled: 'لغو شد',
      logged_out: 'نشست کاربری شما به پایان زسیده‌است، لطفا دوباره وصل شوید.',
      not_authorized: 'شما اجازه دسترسی به این منبع را ندارید',
    },
    validation: {
      required: 'اجباری',
      minLength: 'حداقل باید %{min} کارکتر باشد',
      maxLength: 'باید %{max} کارکتر یا کمتر باشد',
      minValue: 'حداقل باید %{min} باشد',
      maxValue: 'باید %{max} یا کمتر باشد',
      number: 'باید یک عدد باشد',
      email: 'باید یک آدرس ایمیل صحیح باشد',
      oneOf: 'باید انتخابی از این گزینه‌ها باشد: %{options}',
      regex: 'باید با فرمت خاصی هماهنگ باشد (regexp): %{pattern}',
    },
    saved_queries: {
      label: 'کوئری‌های ذخیره‌شده',
      query_name: 'نام کوئری',
      new_label: 'ذخیره کوئری فعلی...',
      new_dialog_title: 'ذخیره کوئری فعلی به عنوان',
      remove_label: 'حذف کوئری ذخیره شده',
      remove_label_with_name: 'حذف کوئری "%{name}"',
      remove_dialog_title: 'کوئری ذخیره شده حدف شود؟',
      remove_message:
        'آیا از حذف آینم از لیست کوئری‌های ذخیره شده اطمینان دارید؟',
      help: 'لیست را فیلتر کنید و کوئری را برای استفاده بعدی ذخیره کنید',
    },
  },
};

export default farsiMessages;
