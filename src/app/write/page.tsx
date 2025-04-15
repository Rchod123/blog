'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const WritePage = () => {
    const [open,setOpen] = useState(false);
    const [value,setValue] = useState("");
    const {status} = useSession();
    const router = useRouter();
    if(status === "loading"){
        return <div className={styles.loading}>Loading...</div>
    }
    if(status === "authenticated"){
        router.push("/");
    }
    return(
        <div className={styles.container}>
            <input type='text' placeholder='Title'/>
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen((prev) => !prev)}>
                    <Image src="/plus.png" alt="" width={16} height={16}/>
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <Image src="/image.png" alt="" width={16} height={16}/>
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/external.png" alt="" width={16} height={16}/>
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/video.png" alt="" width={16} height={16}/>
                        </button>
                    </div>
                )}
               <textarea className={styles.textArea} value={value} onChange={(e) => setValue(e.target.value)} placeholder='Tell your story'/>
            </div>
        </div>
    )
};

export default WritePage;