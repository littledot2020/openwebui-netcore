import pymssql
import logging
from datetime import datetime
from typing import Optional

logger = logging.getLogger('peewee')

# 定义数据库连接信息
class Database:
    def __init__(self):
        self.server = '47.76.56.75'
        self.database = 'AIEdu'
        self.username = 'aiedu'
        self.password = 'AIEdu2024!@#'
        self.connection = None

    def connect(self):
        if not self.connection:
            self.connection = pymssql.connect(server=self.server, user=self.username, password=self.password, database=self.database)

    def close(self):
        if self.connection:
            self.connection.close()

    def get_cursor(self):
        if not self.connection:
            self.connect()
        return self.connection.cursor(as_dict=True)

# db = Database()

# 用户模型类
class AspNetUser:
    def __init__(self, Id, Name, HeadImage, RegisterIP, UserAgent, Language, RegisterTime, UserName, NormalizedUserName, Email,
                  NormalizedEmail, EmailConfirmed, PasswordHash, SecurityStamp, ConcurrencyStamp, PhoneNumber, 
                  PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnd, LockoutEnabled, AccessFailedCount, Role):
        self.id = Id
        self.phone = UserName
        self.name = Name
        self.profile_image_url = HeadImage
        self.HeadImage = HeadImage
        self.RegisterIP = RegisterIP
        self.UserAgent = UserAgent
        self.Language = Language
        self.RegisterTime = RegisterTime
        self.UserName = UserName
        self.NormalizedUserName = NormalizedUserName
        self.email = Email
        self.NormalizedEmail = NormalizedEmail
        self.EmailConfirmed = EmailConfirmed
        self.PasswordHash = PasswordHash
        self.SecurityStamp = SecurityStamp
        self.ConcurrencyStamp = ConcurrencyStamp
        self.PhoneNumber = PhoneNumber
        self.PhoneNumberConfirmed = PhoneNumberConfirmed
        self.TwoFactorEnabled = TwoFactorEnabled
        self.LockoutEnd = LockoutEnd
        self.LockoutEnabled = LockoutEnabled
        self.AccessFailedCount = AccessFailedCount
        self.role = Role

    def __str__(self):
        return f"AspNetUser {self.id}: {self.name} ({self.email}, {self.UserName}, {self.role})"

# 数据库操作类
class SQLServerConnection:
    def __init__(self):
        self.db = Database()
        self.db.connect()

    def get_user_by_id(self, id: int) -> Optional[AspNetUser]:
        cursor = self.db.get_cursor()
        try:
            # logger.info(f"id: {id}")
            cursor.execute('SELECT * FROM AspNetUsers WHERE Id = %s', (id,))
            row = cursor.fetchone()
            if row:
                # print(row)
                return AspNetUser(**row)
            return None
        finally:
            cursor.close()

    # 创建表不需要
    def create_user_table(self):
        cursor = self.db.get_cursor()
        try:
            cursor.execute('''
            IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='AspNetUsers' and xtype='U')
                CREATE TABLE AspNetUsers (
                    Id INT PRIMARY KEY IDENTITY,
                    Name VARCHAR(255),
                    HeadImage VARCHAR(255),
                    RegisterIP VARCHAR(255),
                    UserAgent VARCHAR(255),
                    Language VARCHAR(255),
                    RegisterTime DATETIME,
                    UserName VARCHAR(256),
                    NormalizedUserName VARCHAR(256),
                    Email VARCHAR(256),
                    NormalizedEmail VARCHAR(256),
                    EmailConfirmed BIT,
                    PasswordHash VARCHAR(255),
                    SecurityStamp VARCHAR(255),
                    ConcurrencyStamp VARCHAR(255),
                    PhoneNumber VARCHAR(450),
                    PhoneNumberConfirmed BIT,
                    TwoFactorEnabled BIT,
                    LockoutEnd DATETIME,
                    LockoutEnabled BIT,
                    AccessFailedCount INT,
                    Role VARCHAR(255)
                )
            ''')
            self.db.connection.commit()
        finally:
            cursor.close()