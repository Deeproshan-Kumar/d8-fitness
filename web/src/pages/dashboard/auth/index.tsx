import { Button, Input, Label, FileInput } from "../../../components/dashboard/ui";
import { useEffect, useState, type ChangeEvent } from "react";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [fileName, setFilename] = useState<string | null>(null);

  const handleTab = (tab: string) => {
    const login = tab === "login";

    setIsLogin(login);
    localStorage.setItem("isLoginTab", String(login));
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const filename = event?.target.files?.[0]?.name || null;
    setFilename(filename);
  }

  useEffect(() => {
    const savedTab = localStorage.getItem("isLoginTab");

    if (savedTab !== null) {
      setIsLogin(savedTab === "true");
    }
  }, []);

  return (
    <section className="flex">
      <div className="w-1/2 p-10 pt-25 lg:p-25">
        <div className="relative center flex-nowrap bg-surface-2 gap-0 rounded-full max-w-90 mx-auto border border-border-strong overflow-hidden mb-8">
          <div className={`absolute top-0 left-0 bg-primary h-9 w-1/2 z-0 transition-transform duration-500 ${isLogin ? 'translate-x-0' : 'translate-x-full'}`}></div>
          <Button variant="ghost" size="sm" className={`h-9 w-full rounded-l-full rounded-r-none z-1 transition-colors duration-300`} onClick={() => handleTab("login")}>
            <span className={`z-2 ${isLogin ? 'text-on-primary' : 'text-quaternary'}`}>Login</span>
          </Button>
          <Button variant="ghost" size="sm" className={`h-9 w-full rounded-r-full rounded-l-none z-1 transition-colors duration-300`} onClick={() => handleTab("register")}>
            <span className={`z-2 ${!isLogin ? 'text-on-primary' : 'text-quaternary'}`}>Register</span>
          </Button>
        </div>
        {isLogin ? <form className="space-y-5">
          <div>
            <Label labelFor="email" label="Email Address" />
            <Input type="email" placeholder="Email" id="email" />
          </div>
          <div>
            <Label labelFor="password" label="Password" />
            <Input type="password" placeholder="Password" id="password" />
          </div>
          <p className="text-xs text-quaternary font-normal text-end">
            <Button variant="ghost" size="xs" className="px-0! py-0! hover:bg-transparent hover:underline hover:underline-offset-4">Forgot password?</Button>
          </p>
          <p className="text-xs text-faint font-normal">Don't have an account? <Button variant="ghost" size="xs" onClick={() => handleTab("register")} className="px-0! hover:bg-transparent hover:underline hover:underline-offset-4">Register</Button></p>
          <Button type="submit" size="sm" className="h-9 w-full rounded-sm">Login</Button>
        </form> : <form className="space-y-5">
          <div className="flex gap-4">
            <div className="w-1/2">
              <Label labelFor="first-name" label="First Name" />
              <Input type="text" placeholder="First Name" id="first-name" />
            </div>
            <div className="w-1/2">
              <Label labelFor="last-name" label="Last Name" />
              <Input type="text" placeholder="Last Name" id="last-name" />
            </div>
          </div>
          <div>
            <Label labelFor="email" label="Email Address" />
            <Input type="email" placeholder="Email" id="email" />
          </div>
          <div>
            <Label labelFor="photograph" label="Choose a Profile Picture" />
            <FileInput id="photograph" filename={fileName} onChange={(e) => handleImageUpload(e)} />
          </div>
          <div>
            <Label labelFor="create-password" label="Create Password" />
            <Input type="password" placeholder="Create Password" id="create-password" />
          </div>
          <div>
            <Label labelFor="confirm-password" label="Confirm Password" />
            <Input type="password" placeholder="Confirm Password" id="confirm-password" />
          </div>
          <Button type="submit" size="sm" className="h-9 w-full rounded-sm">Register</Button>
        </form>}
      </div>
      <div className="w-1/2 relative after:pointer-events-none after:absolute after:inset-0 after:bg-linear-to-r after:from-canvas after:via-canvas/25 after:to-canvas/60">

      </div>
    </section>
  );
};

export default AuthPage;