make clean; make html 2>/dev/null;
finishd=$?;

if [[ ! $finished == 0 ]]; then
 echo "build failure"
fi
