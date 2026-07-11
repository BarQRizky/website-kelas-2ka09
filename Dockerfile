FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

# Salin source code Java
COPY MemberSearchServer.java .

# Compile source code
RUN javac MemberSearchServer.java

# Expose port (Render akan otomatis mendeteksi port ini)
EXPOSE 8080

# Jalankan server
CMD ["java", "MemberSearchServer"]
