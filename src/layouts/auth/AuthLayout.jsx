export const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen bg-gray-50 dark:bg-slate-900">
      <div className="flex flex-row items-stretch h-full">
        <div className="w-full max-w-[1024px] mx-auto p-6 self-center">
          <div className="flex flex-row mt-7 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-[611px]">
            <div className="xs:w-0 sm:w-0 md:w-[349px]">
              <img
                className="h-full rounded-l-lg"
                src="https://plus.unsplash.com/premium_photo-1681426452748-2aad018a084d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                srcSet=""
              />
            </div>
            <div className="flex-auto flex justify-center self-center">
              <div className="p-4 sm:p-7 m-3 w-full max-w-md ">
                <img
                  className="mb-6"
                  src="/public/assets/img/iSanemartLogo.svg"
                  alt="iSanemart Logo"
                />
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
