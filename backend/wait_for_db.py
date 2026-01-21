import os
import time
import MySQLdb

host = os.getenv("DB_HOST", "db")
port = int(os.getenv("DB_PORT", "3306"))
user = os.getenv("DB_USER", "planta_user")
password = os.getenv("DB_PASSWORD", "planta_pass")
name = os.getenv("DB_NAME", "planta_transfor")

timeout = int(os.getenv("DB_WAIT_TIMEOUT", "60"))
start = time.time()

while True:
    try:
        conn = MySQLdb.connect(
            host=host,
            user=user,
            passwd=password,
            db=name,
            port=port,
            connect_timeout=3,
        )
        conn.close()
        print("DB ready")
        break
    except Exception as e:
        if time.time() - start > timeout:
            raise RuntimeError(f"DB not ready after {timeout}s: {e}")
        print("Waiting for DB...")
        time.sleep(2)
