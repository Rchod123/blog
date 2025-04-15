import Link from "next/link";
import styles from "./Comment.module.css";
import Image from "next/image";
const Comment = () => {
    const status = "authenticated";
    const data = [
        {
            _id: 123,
            user:{
                name:"Rajesh"
            },
            createdAt: new Date(),
            desc:"this is description from the post"
        }
    ]
    return(
        <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
          <div className={styles.write}>
            <textarea
              placeholder="write a comment..."
              className={styles.input}
              
            />
            <button className={styles.button} >
              Send
            </button>
          </div>
        ) : (
          <Link href="/login">Login to write a comment</Link>
        )}
        <div className={styles.comments}>
          {data?.map((item) => (
                <div className={styles.comment} key={item._id}>
                  <div className={styles.user}>
                    
                      <Image
                        src={"/p1.jpeg"}
                        alt=""
                        width={50}
                        height={50}
                        className={styles.image}
                      />

                    <div className={styles.userInfo}>
                      <span className={styles.username}>{item.user.name}</span>
                     
                    </div>
                  </div>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              ))}
        </div>
      </div>
    )
};

export default Comment;