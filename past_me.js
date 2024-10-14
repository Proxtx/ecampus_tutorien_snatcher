(async () => {
  while (new Date().getMinutes() != 0)
    await new Promise((r) => setTimeout(r, 10));
  for (let i = 0; i < 5; i++) {
    await fetch(
      "ilias.php?ref_id=COURSE_ID&cmd=post&cmdClass=ilgroupregistrationgui&cmdNode=wi:nj:dj&baseClass=ilRepositoryGUI&fallbackCmd=join&rtoken=TOKEN",
      { method: "POST" }
    );
    await new Promise((r) => setTimeout(r, 100));
  }
})();
